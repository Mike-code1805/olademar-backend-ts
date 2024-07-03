import { logger } from '../../logger/appLoger';
import { createResource } from '../../shared/factory/createResource';
import { orderModel } from '../entity/model/orderModel';
import { CreateOrder, Order } from '../entity/types/Order';
import { sendEmailServiceNodeMailer } from '../../shared/services/sendEmailNodemailerService';
import { emailMessage } from '../../auth/utils/validateAccountEmailTemplate';

export const createOneOrderService = async (orderRequest: CreateOrder): Promise<Order> => {
  try {
    const order: any = await createResource(orderModel)(orderRequest);
    await sendEmailServiceNodeMailer('maryo200116@gmail.com', 'Confirmar Pedido', emailMessage(order.id, orderRequest.userInfo.username, orderRequest.userInfo.phone));
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
