import { likeModel } from '../entity/model/likeModel';
import { logger } from '../../logger/appLoger';

export const didUserLikeProductService = async (userId: string, productId: string): Promise<boolean> => {
  try {
    const like = await likeModel.findOne({ userId, productId });
    return !!like;
  } catch (error: any) {
    logger.error('error checking user like', {
      instance: 'services',
      fn: 'didUserLikeProductService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error verificando si el usuario dio like.');
  }
};
