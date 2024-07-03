import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getDistrictsService } from '../services';

export const getDistrictsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: code } = req.params;
    const districts = await getDistrictsService(code);

    return res.status(200).json(districts);
  } catch (error: any) {
    logger.error('Error create one global', {
      instance: 'controller',
      fn: 'getDistrictsController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
