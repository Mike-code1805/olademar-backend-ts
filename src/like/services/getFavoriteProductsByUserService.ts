
import { favoriteModel } from '../../favorite/entity/model/favoriteModel';
import { logger } from '../../logger/appLoger';

export const getFavoriteProductsByUserService = async (userId: string): Promise<string[]> => {
  try {
    const favorites = await favoriteModel.find({ userId }, 'productId');
    return favorites.map((favorite) => favorite.productId.toString());
  } catch (error: any) {
    logger.error('error getting favorite products', {
      service: 'getFavoriteProductsByUserService',
      trace: error.message,
    });
    throw new Error('error getting favorite products');
  }
};
