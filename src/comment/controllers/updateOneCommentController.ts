import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger/appLoger';
import { updateOneCommentService } from '../services';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const updateOneCommentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, id: productId } = req.params;
    const { commentText, rating } = req.body;
    await updateOneCommentService(userId, productId, { commentText, rating });

    res.status(200).json('Updated');
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'updateOneCommentController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
