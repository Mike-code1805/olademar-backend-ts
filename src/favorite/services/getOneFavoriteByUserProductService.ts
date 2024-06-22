import { Favorite } from '../entity/types/Favorite';
import { favoriteModel } from '../entity/model/favoriteModel';
import { logger } from '../../logger/appLoger';

export const getOneFavoriteByUserProductService = async (userId: string, productId: string): Promise<Favorite | null> => {
  try {
    const favorite = await favoriteModel.findOne({ userId, productId });
    return favorite as Favorite;
  } catch (error: any) {
    logger.error('error creating a favorite', {
      instance: 'services',
      fn: 'createOneFavoriteController',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error creando un favorito.');
  }
};
