import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getProvincesService } from '../services';

export const getProvincesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: code } = req.params;
    const provinces = await getProvincesService(code);

    return res.status(200).json(provinces);
  } catch (error: any) {
    logger.error('Error create one global', {
      instance: 'controller',
      fn: 'getProvincesController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
