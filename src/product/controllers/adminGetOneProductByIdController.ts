import { NextFunction, Request, Response } from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { adminGetOneProductByIdService } from '../services';

export const adminGetOneProductByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await adminGetOneProductByIdService(req.params.id);
    res.status(200).json(product);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'error getting the user'));
  }
};
