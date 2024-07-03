import { createResource } from '../../shared/factory/createResource';

import { CreateComment, Comment } from '../entity/types/Comment';
import { commentModel } from '../entity/model/commentModel';
import { logger } from '../../logger/appLoger';
import { getOneCommentByUserProductService } from './getOneCommentByUserProductService';

export const createOneCommentService = async (commentRequest: CreateComment): Promise<Comment | null> => {
  try {
    const existComment = await getOneCommentByUserProductService(commentRequest.userId.toString(), commentRequest.productId.toString());
    if (existComment) throw new Error('Ya existe un comentario para este producto');

    const comment = await createResource(commentModel)(commentRequest);
    return comment as Comment;
  } catch (error: any) {
    logger.error('error creating a comment', {
      instance: 'services',
      fn: 'createOneCommentController',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error creando un favorito.');
  }
};
