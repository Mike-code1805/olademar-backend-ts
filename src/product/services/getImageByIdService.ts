import { logger } from '../../logger/appLoger';
import { Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';

export const getImageByIdService = async (id: string): Promise<any> => {
  try {
    const products = await productModel.findById({ _id: id }, 'image').populate('image');
    if (!products) throw new Error('No se encontró una imagen.');

    return { id: products.id, image: { data: `data:${products.image.contentType};base64,${Buffer.from(products.image.data).toString('base64')}` } };
  } catch (error: any) {
    logger.error('error getting the image of product', {
      service: 'getImageByIdService',
      trace: error.message,
    });
    throw new Error('error getting the image of product');
  }
};
