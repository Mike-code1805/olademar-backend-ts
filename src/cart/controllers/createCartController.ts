import { createOneCartService } from '../services/createOneCartService';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { Types } from 'mongoose';

export const createCartController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { products } = req.body;
  try {
    const newCart = await createOneCartService({ ...products, userId: new Types.ObjectId(req.params.userId) });
    res.status(201).json(newCart);
  } catch (error: any) {
    logger.error('error on create cart controller', {
      instance: 'controller',
      service: 'createCartController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
