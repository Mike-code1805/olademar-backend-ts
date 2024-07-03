import { Types } from 'mongoose';
import { logger } from '../../logger/appLoger';
import { productModel } from '../entity/model/productModel';
import { GetOneProductByIdServiceProps } from 'product/entity/types/GetOneProductByIdService';
import { getLikesCountByProductService } from '../../like/services';
import { getAllCommentsByProductService } from '../../comment/services';

export const getOneProductByIdService = async (productId: string): Promise<GetOneProductByIdServiceProps | null> => {
  try {
    const product = await productModel.findById({ _id: typeof productId === 'string' ? new Types.ObjectId(productId) : productId }, '_id image title description shortdescription dimensions price ofert');
    const likesCount = await getLikesCountByProductService(productId);
    const comments = await getAllCommentsByProductService(productId);

    if (!product) throw new Error('El producto en cuestión no fue encontrado.');

    return {
      id: product.id,
      image: { data: `data:${product.image.contentType};base64,${Buffer.from(product.image.data).toString('base64')}` },
      title: product.title,
      description: product.description,
      shortdescription: product.shortdescription,
      dimensions: product.dimensions,
      price: product.price,
      ofert: product.ofert,
      isFavorite: false,
      isLiked: false,
      likesCount,
      comments,
    };
  } catch (error: any) {
    logger.error(`error getting user with id ${productId}`, {
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
