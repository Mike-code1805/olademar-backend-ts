import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { getAllFavoritesService } from '../services/getAllFavoritesService';

export const getAllFavoritesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const favorites = await getAllFavoritesService(userId);
    return res.status(200).json(favorites);
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllFavoritesService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
