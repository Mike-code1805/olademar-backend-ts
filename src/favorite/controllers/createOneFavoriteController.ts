import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneFavoriteService } from '../services/createOneFavoriteService';

export const createOneFavoriteController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, id } = req.params;

    await createOneFavoriteService({
      userId: new Types.ObjectId(userId),
      productId: new Types.ObjectId(id),
    });

    return res.status(201).json('Created');
  } catch (error: any) {
    logger.error('Error create one favorite', {
      instance: 'controller',
      fn: 'createOneFavoriteController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
