
import { logger } from "../../logger/appLoger";
import { findAllResources } from "../../shared/factory/findAllResources";
import { Product } from "../entity/types/Product";
import { productModel } from "../entity/model/productModel";

export const getAllProductsService = async (): Promise<Product[]> => {
  try {
    const products: Product[] = await findAllResources(productModel)();
    return products;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllUsersService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
