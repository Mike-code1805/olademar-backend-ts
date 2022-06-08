
import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { createOneOrderService } from '../services/createOneOrderService';

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const { products, owner, amount, address, status } = req.body;
    try {
        const newOrder = await createOneOrderService({products, owner, amount, address, status });
        res.status(201).json( newOrder );
    } catch (error: any) {
        logger.error('error on create cart controller', {
        instance: 'controller',
        service: 'createCartController',
        trace: error.message,
        });
        next(new ApplicationError(403, error.message));
    }
};