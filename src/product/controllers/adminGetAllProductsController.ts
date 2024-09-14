import { NextFunction, Request, Response } from 'express';
import { adminGetAllProductsService } from '../services';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const adminGetAllProductsController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await adminGetAllProductsService();
    res.status(200).json(products);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
