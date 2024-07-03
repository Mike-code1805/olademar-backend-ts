import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { getOneCommentByUserProductService } from '../services';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const getOneCommentByUserProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, id: productId } = req.params;
    const comment = await getOneCommentByUserProductService(userId, productId);
    if (!comment) throw new Error('No existe un comentario del usuario para este producto');

    res.status(200).json(comment);
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getOneCommentByUserProductController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
