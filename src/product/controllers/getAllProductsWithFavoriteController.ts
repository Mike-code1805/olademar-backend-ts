import { NextFunction, Request, Response } from 'express';
import { getAllProductsWithFavoriteService } from '../services/getAllProductsWithFavoriteService';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';

export const getAllProductsWithFavoriteController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const products = await getAllProductsWithFavoriteService(userId);
    res.status(200).json(products);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'Ocurrió un error al obtener la lista de productos. Por favor intente nuevamente.'));
  }
};
