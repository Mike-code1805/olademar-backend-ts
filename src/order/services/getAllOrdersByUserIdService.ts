import { logger } from '../../logger/appLoger';
import { orderModel } from '../entity/model/orderModel';
import { Order } from '../entity/types/Order';

export const getAllOrdersByUserIdService = async (userId: string): Promise<Order[]> => {
  try {
    const orders = await orderModel.find({ userId }, 'id userOrderNumber totalAmount status');
    return orders as Order[];
  } catch (error: any) {
    logger.error('Error fetching orders by user ID', {
      instance: 'services',
      fn: 'getAllOrdersByUserIdService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error fetching orders by user ID.');
  }
};
