import { Types } from 'mongoose';
import { logger } from '../../logger/appLoger';
import { productModel } from '../entity/model/productModel';
import { GetOneProductByIdServiceProps } from 'product/entity/types/GetOneProductByIdService';

export const getOneProductByIdService = async (id: string): Promise<GetOneProductByIdServiceProps | null> => {
  try {
    const product = await productModel.findById({ _id: typeof id === 'string' ? new Types.ObjectId(id) : id }, '_id image title description shortdescription dimensions price ofert');
    if (!product) throw new Error('El producto en cuestión no fue encontrado.');

    return {
      _id: product.id,
      image: { data: `data:${product.image.contentType};base64,${Buffer.from(product.image.data).toString('base64')}` },
      title: product.title,
      description: product.description,
      shortdescription: product.shortdescription,
      dimensions: product.dimensions,
      price: product.price,
      ofert: product.ofert,
    };
  } catch (error: any) {
    logger.error(`error getting user with id ${id}`, {
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
