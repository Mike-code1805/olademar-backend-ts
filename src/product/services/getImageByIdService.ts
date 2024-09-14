import { logger } from '../../logger/appLoger';
import { productModel } from '../entity/model/productModel';

export const getImageByIdService = async (id: string): Promise<{ id: string; image: string }> => {
  try {
    const products = await productModel.findById({ _id: id }, 'images').populate('images');
    if (!products) throw new Error('No se encontró una imagen.');

    return { id: products.id, image: products.images[0] };
  } catch (error: any) {
    logger.error('error getting the image of product', {
      service: 'getImageByIdService',
      trace: error.message,
    });
    throw new Error('error getting the image of product');
  }
};
