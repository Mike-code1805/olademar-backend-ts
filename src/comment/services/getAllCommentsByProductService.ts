import { Comment } from '../entity/types/Comment';
import { commentModel } from '../entity/model/commentModel';
import { logger } from '../../logger/appLoger';

export const getAllCommentsByProductService = async (productId: string): Promise<Comment[] | []> => {
  try {
    const comment = await commentModel.find({ productId, status: 'published' }, '_id userId productId commentText rating userName');
    return comment;
  } catch (error: any) {
    logger.error('error getting comments by product', {
      instance: 'services',
      fn: 'getAllCommentsByProductService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error obteniendo los comentarios por producto.');
  }
};
