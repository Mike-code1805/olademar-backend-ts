import { Cart, CartEdit } from '../entity/types/Cart';
import { updateOneResourceById } from '../../shared/factory/updateOneResourceById';
import { cartModel } from '../entity/model/cartModel';
import { logger } from '../../logger/appLoger';

export const updateCartStatusService = async (
  cartId: string,
  status: 'pending' | 'confirmed' | 'cancelled'
): Promise<string> => {
  try {
    await cartModel.updateOne({ _id: cartId }, { status });
    return 'success';
  } catch (error: any) {
    logger.error('error creating a cart service', {
      instance: 'services',
      service: 'updateCartStatusService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`${error.message}`);
  }
};
