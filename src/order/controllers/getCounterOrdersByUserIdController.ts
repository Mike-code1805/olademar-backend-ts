import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getCounterOrdersByUserIdService } from '../services';

export const getCounterOrdersByUserIdController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { userId } = req.params;
    const numberUsers = await getCounterOrdersByUserIdService(userId);
    res.status(200).json(numberUsers);
  } catch (error: any) {
    logger.error('Error fetching orders by user ID', {
      instance: 'controller',
      service: 'getCounterOrdersByUserIdController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
