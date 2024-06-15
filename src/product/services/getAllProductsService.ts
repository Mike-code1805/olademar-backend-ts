import { logger } from '../../logger/appLoger';
import { Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';

export const getAllProductsService = async (): Promise<any[]> => {
  try {
    const products: Product[] = await productModel.find({}, '_id image title shortdescription price ofert dimensions');
    const formattedProducts = products.map((product) => ({
      id: product.id,
      image: { data: `data:${product.image.contentType};base64,${Buffer.from(product.image.data).toString('base64')}` },
      title: product.title,
      shortdescription: product.shortdescription,
      price: product.price,
      ofert: product.ofert,
      dimensions: product.dimensions,
    }));
    return formattedProducts;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllProductsService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
