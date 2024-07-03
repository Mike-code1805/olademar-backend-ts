import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneLikeService } from '../services/createOneLikeService';

export const createOneLikeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, id } = req.params;
    console.log(id);
    await createOneLikeService({
      userId: new Types.ObjectId(userId),
      productId: new Types.ObjectId(id),
    });

    return res.status(201).json('Created');
  } catch (error: any) {
    logger.error('Error create one like', {
      instance: 'controller',
      fn: 'createOneLikeController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
