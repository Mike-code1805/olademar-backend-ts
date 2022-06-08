
import { orderModel } from "../entity/model/orderModel";
import { Order } from "../entity/types/Order";
import { logger } from "../../logger/appLoger";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";


export const getOneOrderByIdService = async (id: string ): Promise< Order | null > => {
    try {
      const order: Order[] = await findOneResourceById(orderModel)(id);
      return order[0]
    } catch (error: any) {
      logger.error(`error getting order with id ${id}`, {
        service: 'getOneOrderByIdService',
        trace: error.message,
      });
      throw new Error(error.message);
    }
};

