import { Comment } from '../entity/types/Comment';
import { commentModel } from '../entity/model/commentModel';
import { logger } from '../../logger/appLoger';

export const getOneCommentByUserProductService = async (userId: string, productId: string): Promise<Comment | null> => {
  try {
    const comment = await commentModel.findOne({ userId, productId }, 'commentText rating');
    return comment as Comment;
  } catch (error: any) {
    logger.error('error creating a comment', {
      instance: 'services',
      fn: 'getOneCommentByUserProductService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error creando un favorito.');
  }
};
