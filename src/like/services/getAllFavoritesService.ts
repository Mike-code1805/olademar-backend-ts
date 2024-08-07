import { logger } from '../../logger/appLoger';
import { Types } from 'mongoose';
import { favoriteModel } from '../../favorite/entity/model/favoriteModel';

export const getAllFavoritesService = async (userId: string): Promise<any[]> => {
  try {
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
          image: '$productDetails.image',
          description: '$productDetails.description',
          shortdescription: '$productDetails.shortdescription',
          price: '$productDetails.price',
          ofert: '$productDetails.ofert',
          dimensions: '$productDetails.dimensions',
        },
      },
    ]);

    const response = favoritesWithDetails.map((favorite) => ({
      _id: favorite._id.toString(),
      productId: favorite.productId.toString(),
      image: { data: `data:${favorite.image.contentType};base64,${favorite.image.data.toString('base64')}` },
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
    throw new Error('error getting the users');
  }
};
