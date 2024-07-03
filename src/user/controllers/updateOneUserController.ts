import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { updateOneUserService } from '../services';

export const updateOneUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const user = await updateOneUserService(userId, req.body);
    console.log(user);
    res.status(200).json({ message: 'updated' });
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'error updating the user'));
  }
};
