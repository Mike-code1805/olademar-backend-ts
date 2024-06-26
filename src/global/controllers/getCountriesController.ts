import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getCountriesService } from '../services';

export const getCountriesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const countries = await getCountriesService();

    return res.status(200).json(countries);
  } catch (error: any) {
    logger.error('Error create one global', {
      instance: 'controller',
      fn: 'getCountriesController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
