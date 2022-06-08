import { createResource } from '../../shared/factory/createResource';

import { CreateProduct, Product } from '../entity/types/Product';
import { productModel } from '../entity/model/productModel';
import { logger } from '../../logger/appLoger';


export const createOneProductService = async (
  taskRequest: CreateProduct
): Promise<Product> => {
  try {
    const task = await createResource(productModel)(taskRequest);
    return task as Product;
  } catch (error: any) {
    logger.error('error creating a product', {
      service: 'createOneProductService',
      trace: error.message,
    });
    throw new Error('error creating a product');
  }
};