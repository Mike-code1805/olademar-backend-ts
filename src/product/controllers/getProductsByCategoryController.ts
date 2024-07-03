import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getProductsByCategoryService } from '../services';

export const getProductsByCategoryController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: category } = req.params;
    const products = await getProductsByCategoryService(category);
    res.status(200).json(products);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'Ocurrió un error al obtener la lista de productos. Por favor intente nuevamente.'));
  }
};
