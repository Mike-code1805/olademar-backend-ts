import { NextFunction, Request, Response } from 'express';
import { getImageByIdService } from '../services/getImageByIdService';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';

export const getImageByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await getImageByIdService(req.params.id);
    res.status(200).json(products);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'Ocurrió un error al obtener la lista de productos. Por favor intente nuevamente.'));
  }
};
