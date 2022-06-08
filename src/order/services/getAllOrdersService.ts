
import { logger } from "../../logger/appLoger";
import { findAllResources } from "../../shared/factory/findAllResources";
import { Order } from "../entity/types/Order";
import { orderModel } from "../entity/model/orderModel";

export const getAllOrdersService = async (): Promise<Order[]> => {
  try {
    const orders: Order[] = await findAllResources(orderModel)();
    return orders;
  } catch (error: any) {
    logger.error('error getting the orders', {
      service: 'getAllOrdersService',
      trace: error.message,
    });
    throw new Error('error getting the orders');
  }
};
