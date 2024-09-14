import { Types } from 'mongoose';
import { logger } from '../../logger/appLoger';
import { productModel } from '../entity/model/productModel';
import { AdminGetOneProductByIdServiceProps } from 'product/entity/types/AdminGetOneProductByIdService';

export const adminGetOneProductByIdService = async (
  productId: string
): Promise<AdminGetOneProductByIdServiceProps | null> => {
  try {
    const product = await productModel.findById(
      { _id: typeof productId === 'string' ? new Types.ObjectId(productId) : productId },
      '_id images title description categories shortdescription dimensions price ofert'
    );

    if (!product) throw new Error('El producto en cuestión no fue encontrado.');

    return {
      id: product.id,
      images: product.images,
      categories: product.categories,
      title: product.title,
      description: product.description,
      shortdescription: product.shortdescription,
      dimensions: product.dimensions,
      price: product.price,
      ofert: product.ofert,
    };
  } catch (error: any) {
    logger.error(`error getting user with id ${productId}`, {
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
