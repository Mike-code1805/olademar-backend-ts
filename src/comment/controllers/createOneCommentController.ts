import { Types } from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneCommentService } from '../services';

export const createOneCommentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const { productId, commentText, rating, username } = req.body;

    await createOneCommentService({
      userId: new Types.ObjectId(userId),
      productId: new Types.ObjectId(productId),
      commentText,
      rating,
      replies: [],
      isFlagged: false,
      status: 'pending',
      username,
    });

    return res.status(201).json('Created');
  } catch (error: any) {
    logger.error('Error create one comment', {
      instance: 'controller',
      fn: 'createOneCommentController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
