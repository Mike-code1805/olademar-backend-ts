import { logger } from '../../logger/appLoger';
import { productModel } from '../entity/model/productModel';

export const getImageDataByIdService = async (id: string): Promise<string> => {
  try {
    const products: any = await productModel.findById({ _id: id }, 'images').populate('images');
    if (!products) throw new Error('No se encontró una imagen.');

    return products.images[0];
  } catch (error: any) {
    logger.error('error getting the image of product', {
      service: 'getImageDataByIdService',
      trace: error.message,
    });
    throw new Error('error getting the image of product');
  }
};
