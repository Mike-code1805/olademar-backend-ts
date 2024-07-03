import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getOneProductByIdWithFavoriteLikeService } from '../services/getOneProductByIdWithFavoriteLikeService';

export const getOneProductByIdWithFavoriteLikeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, id } = req.params;
    const product = await getOneProductByIdWithFavoriteLikeService(userId, id);
    res.status(200).json(product);
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
};
