import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getStatesService } from '../services';

export const getStatesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: code } = req.params;
    const states = await getStatesService(code);

    return res.status(200).json(states);
  } catch (error: any) {
    logger.error('Error create one global', {
      instance: 'controller',
      fn: 'getStatesController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
