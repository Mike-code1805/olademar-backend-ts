import { logger } from '../../logger/appLoger';
import { Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';
import { getFavoriteProductsByUserService } from '../../favorite/services/getFavoriteProductsByUserService';

export const getAllProductsWithFavoriteService = async (userId: string): Promise<any[]> => {
  try {
    const products: Product[] = await productModel.find({}, '_id image title shortdescription price ofert dimensions');
    const favoriteProductIds = await getFavoriteProductsByUserService(userId);

    const formattedProducts = products.map((product) => ({
      id: product.id,
      image: { data: `data:${product.image.contentType};base64,${Buffer.from(product.image.data).toString('base64')}` },
      title: product.title,
      shortdescription: product.shortdescription,
      price: product.price,
      ofert: product.ofert,
      dimensions: product.dimensions,
      isFavorite: favoriteProductIds.includes(product.id.toString()),
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
