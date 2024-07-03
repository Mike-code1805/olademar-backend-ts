import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneGlobalService } from '../services/createOneGlobalService';

export const createOneGlobalController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { countries } = req.body;

    await createOneGlobalService({ countries });

    return res.status(201).json('Created');
  } catch (error: any) {
    logger.error('Error create one global', {
      instance: 'controller',
      fn: 'createOneGlobalController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
