import { createResource } from '../../shared/factory/createResource';

import { CreateLike, Like } from '../entity/types/Like';
import { likeModel } from '../entity/model/likeModel';
import { logger } from '../../logger/appLoger';

export const createOneLikeService = async (likeRequest: CreateLike): Promise<Like | null> => {
  try {
    const { userId, productId } = likeRequest;
    const existLike = await likeModel.findOne({ userId, productId });

    if (existLike) {
      try {
        await likeModel.findByIdAndDelete(existLike.id);
        return null;
      } catch (error) {
        throw new Error('Algo sucedió al momento de retirar el me gusta.');
      }
    }

    const like = await createResource(likeModel)(likeRequest);
    return like as Like;
  } catch (error: any) {
    logger.error('error creating a like', {
      instance: 'services',
      fn: 'createOneLikeService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error otorgando el me gusta.');
  }
};
