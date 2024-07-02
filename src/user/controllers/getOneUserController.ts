import { NextFunction, Request, Response } from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getOneUserEncryptedService } from '../services';

export const getOneUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const user = await getOneUserEncryptedService(userId);
    res.status(200).json(user);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'error getting the users'));
  }
};
