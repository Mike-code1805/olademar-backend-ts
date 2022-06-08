
import { logger } from '../../logger/appLoger';
import { createResource } from '../../shared/factory/createResource';
import { orderModel } from '../entity/model/orderModel';
import { CreateOrder, Order } from '../entity/types/Order';

export const createOneOrderService = async (
  orderRequest: CreateOrder
): Promise<Order> => {
  try {
    const order = await createResource(orderModel)(orderRequest);
    return order as Order;
  } catch (error: any) {
    logger.error('error creating a order service', {
      instance: 'services',
      service: 'createOneOrderService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a order ${error.message}`);
  }
};