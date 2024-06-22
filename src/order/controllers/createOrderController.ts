import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { createOneOrderService } from '../services';
import { Types } from 'mongoose';

export const createOneOrderController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { userId } = req.params;
    const { items, address, totalAmount } = req.body;
    const newOrder = await createOneOrderService({
      userId: new Types.ObjectId(userId),
      items,
      totalAmount,
      address,
      status: 'pending',
    });
    res.status(201).json(newOrder);
  } catch (error: any) {
    logger.error('error on create cart controller', {
      instance: 'controller',
      service: 'createOneOrderController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
