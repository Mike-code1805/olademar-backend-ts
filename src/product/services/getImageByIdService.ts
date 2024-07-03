import { logger } from '../../logger/appLoger';
import { productModel } from '../entity/model/productModel';

export const getImageByIdService = async (id: string): Promise<any> => {
  try {
    const products = await productModel.findById({ _id: id }, 'images').populate('images');
    if (!products) throw new Error('No se encontró una imagen.');

    return { id: products.id, image: { data: `data:${products.images[0].contentType};base64,${Buffer.from(products.images[0].data).toString('base64')}` } };
  } catch (error: any) {
    logger.error('error getting the image of product', {
      service: 'getImageByIdService',
      trace: error.message,
    });
    throw new Error('error getting the image of product');
  }
};
