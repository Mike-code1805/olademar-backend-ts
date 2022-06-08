import { cartModel } from '../entity/model/cartModel';

import { logger } from '../../logger/appLoger';
import { createResource } from '../../shared/factory/createResource';
import { Cart, CreateCart } from '../../cart/entity/types/Cart';


export const createOneCartService = async (
  cartRequest: CreateCart
): Promise<Cart> => {
  try {
    const cart = await createResource(cartModel)(cartRequest);
    return cart as Cart;
  } catch (error: any) {
    logger.error('error creating a cart service', {
      instance: 'services',
      service: 'createOneCartService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a cart ${error.message}`);
  }
};
