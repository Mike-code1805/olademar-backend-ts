import { logger } from '../../logger/appLoger';
import { Types } from 'mongoose';
import { favoriteModel } from '../../favorite/entity/model/favoriteModel';

export const getAllFavoritesService = async (userId: string): Promise<any[]> => {
  try {
    console.log('IM IN getAllFavoritesService');
    const favoritesWithDetails = await favoriteModel.aggregate([
      { $match: { userId: new Types.ObjectId(userId) } },
      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'productDetails',
        },
      },
      { $unwind: '$productDetails' },
      {
        $project: {
          _id: 1,
          productId: '$productDetails._id',
          title: '$productDetails.title',
          images: '$productDetails.images',
          description: '$productDetails.description',
          shortdescription: '$productDetails.shortdescription',
          price: '$productDetails.price',
          ofert: '$productDetails.ofert',
          dimensions: '$productDetails.dimensions',
        },
      },
    ]);

    console.log(favoritesWithDetails);

    const response = favoritesWithDetails.map((favorite) => ({
      _id: favorite._id.toString(),
      productId: favorite.productId.toString(),
      image: favorite.images[0],
      title: favorite.title,
      description: favorite.description,
      shortdescription: favorite.shortdescription,
      price: favorite.price,
      ofert: favorite.ofert,
      dimensions: favorite.dimensions,
    }));

    return response;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllFavoritesService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
