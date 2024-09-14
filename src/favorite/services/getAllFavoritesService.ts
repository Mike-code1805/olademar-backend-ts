import { logger } from '../../logger/appLoger';
import { favoriteModel } from '../entity/model/favoriteModel';
import { Types } from 'mongoose';
import { likeModel } from '../../like/entity/model/likeModel';
import { getOneProductByIdService } from '../../product/services/getOneProductByIdService';

export const getAllFavoritesService = async (userId: string): Promise<any[]> => {
  try {
    const favorites = await favoriteModel.find({ userId: new Types.ObjectId(userId) });

    const favoriteDetails = await Promise.all(
      favorites.map(async (favorite) => {
        const product = await getOneProductByIdService(favorite.productId.toString());
        if (!product) return null;
        const likesDetails = await likeModel.find({ productId: product.id });
        const likesCount = likesDetails.length;
        const isLiked = likesDetails.some((like) => like.userId.toString() === userId);

        return {
          _id: favorite._id.toString(),
          productId: product.id.toString(),
          image: product.images[0],
          title: product.title,
          description: product.description,
          shortdescription: product.shortdescription,
          price: product.price,
          ofert: product.ofert,
          dimensions: product.dimensions,
          likesCount,
          isLiked,
        };
      })
    );

    const response = favoriteDetails.filter((favorite) => favorite !== null);

    return response;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllFavoritesService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
