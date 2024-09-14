import { logger } from '../../logger/appLoger';
import { Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';
import { getFavoriteProductsByUserService } from '../../favorite/services/getFavoriteProductsByUserService';

export const getAllProductsByCategoryWithFavoriteService = async (userId: string, category: string): Promise<any[]> => {
  try {
    const products: Product[] = await productModel.find(
      {
        categories: { $in: [category] },
      },
      '_id images title shortdescription price ofert dimensions'
    );
    const favoriteProductIds = await getFavoriteProductsByUserService(userId);

    const formattedProducts = products.map((product) => ({
      id: product.id,
      image: product.images[0],
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
      service: 'getAllProductsByCategoryWithFavoriteService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
