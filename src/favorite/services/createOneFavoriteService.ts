import { createResource } from '../../shared/factory/createResource';

import { CreateFavorite, Favorite } from '../entity/types/Favorite';
import { favoriteModel } from '../entity/model/favoriteModel';
import { logger } from '../../logger/appLoger';

export const createOneFavoriteService = async (favoriteRequest: CreateFavorite): Promise<Favorite | null> => {
  try {
    const { userId, productId } = favoriteRequest;
    const existFavorite = await favoriteModel.findOne({ userId, productId });
    if (existFavorite) {
      try {
        await favoriteModel.deleteOne({ id: existFavorite.id });
        return null;
      } catch (error) {
        throw new Error('Algo sucedió al momento de retirar de la lista de deseos.');
      }
    }

    const favorite = await createResource(favoriteModel)(favoriteRequest);
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
