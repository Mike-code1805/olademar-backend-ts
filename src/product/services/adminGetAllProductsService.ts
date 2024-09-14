import { logger } from '../../logger/appLoger';
import { Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';

export const adminGetAllProductsService = async (): Promise<any[]> => {
  try {
    const products: Product[] = await productModel.find({}, '_id images title shortdescription price ofert');
    const formattedProducts = products.map((product) => ({
      id: product.id,
      image: product.images[0],
      title: product.title,
      shortdescription: product.shortdescription,
      price: product.price,
      ofert: product.ofert,
      dimensions: product.dimensions,
    }));
    return formattedProducts;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'adminGetAllProductsService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
