import { logger } from '../../logger/appLoger';
import { orderModel } from '../entity/model/orderModel';
import { Types } from 'mongoose';

export const getCounterOrdersByUserIdService = async (userId: string): Promise<number> => {
  try {
    const orderCount = await orderModel.countDocuments({ userId: new Types.ObjectId(userId) });
    return orderCount;
  } catch (error: any) {
    logger.error('Error counting orders by user ID', {
      instance: 'services',
      service: 'getCounterOrdersByUserIdService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error counting orders by user ID.');
  }
};
