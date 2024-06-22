import { Comment } from '../entity/types/Comment';
import { commentModel } from '../entity/model/commentModel';
import { logger } from '../../logger/appLoger';

interface UpdateDataProps {
  commentText: string;
  rating: number;
}

export const updateOneCommentService = async (userId: string, productId: string, data: UpdateDataProps): Promise<Comment | null> => {
  try {
    const comment = await commentModel.findOneAndUpdate(
      { userId, productId },
      {
        ...data,
        status: 'pending',
      }
    );
    return comment as Comment;
  } catch (error: any) {
    logger.error('error updating a comment', {
      instance: 'services',
      fn: 'updateOneCommentService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error actualizando un comentario.');
  }
};
