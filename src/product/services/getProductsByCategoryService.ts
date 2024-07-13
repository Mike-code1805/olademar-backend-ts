import { logger } from '../../logger/appLoger';
import { Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';

export const getProductsByCategoryService = async (category: string): Promise<any[]> => {
  try {
    const products: Product[] = await productModel.find(
      {
        categories: { $regex: new RegExp(category, 'i') },
      },
      '_id images title shortdescription price ofert dimensions'
    );

    const formattedProducts = products.map((product) => ({
      id: product.id,
      image: { data: `data:${product.images[0].contentType};base64,${Buffer.from(product.images[0].data).toString('base64')}` },
      title: product.title,
      shortdescription: product.shortdescription,
      price: product.price,
      ofert: product.ofert,
      dimensions: product.dimensions,
    }));
    return formattedProducts;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getProductsByCategoryService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
