import { likeModel } from '../entity/model/likeModel';
import { logger } from '../../logger/appLoger';

export const getLikesCountByProductService = async (productId: string): Promise<number> => {
  try {
    const likesCount = await likeModel.countDocuments({ productId });
    return likesCount;
  } catch (error: any) {
    logger.error('error getting likes count', {
      instance: 'services',
      fn: 'getLikesCountByProductService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error obteniendo la cantidad de likes.');
  }
};
