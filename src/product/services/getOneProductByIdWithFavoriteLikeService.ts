import { Types } from 'mongoose';
import { logger } from '../../logger/appLoger';
import { productModel } from '../entity/model/productModel';
import { GetOneProductByIdWithFavoriteLikeServiceProps } from '../entity/types/GetOneProductByIdWithFavorite';
import { getOneFavoriteByUserProductService } from '../../favorite/services';
import { getLikesCountByProductService, didUserLikeProductService } from '../../like/services';
import { getAllCommentsByProductService } from '../../comment/services';

export const getOneProductByIdWithFavoriteLikeService = async (userId: string, productId: string): Promise<GetOneProductByIdWithFavoriteLikeServiceProps | null> => {
  try {
    const product = await productModel.findById({ _id: typeof productId === 'string' ? new Types.ObjectId(productId) : productId }, '_id images title description shortdescription dimensions price ofert');
    const favorite = await getOneFavoriteByUserProductService(userId, productId);
    const isLiked = await didUserLikeProductService(userId, productId);
    const likesCount = await getLikesCountByProductService(productId);
    const comments = await getAllCommentsByProductService(productId);

    if (!product) throw new Error('El producto en cuestión no fue encontrado.');

    return {
      _id: product.id,
      images: product.images.map((image) => ({ data: `data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}` })),
      title: product.title,
      description: product.description,
      shortdescription: product.shortdescription,
      dimensions: product.dimensions,
      price: product.price,
      ofert: product.ofert,
      isFavorite: favorite ? true : false,
      isLiked: isLiked ? true : false,
      likesCount,
      comments,
    };
  } catch (error: any) {
    logger.error(`error getting the product with id ${productId} and user id ${userId}`, {
      service: 'getOneProductByIdWithFavoriteLikeService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
