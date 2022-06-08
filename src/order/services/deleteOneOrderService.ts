
import { orderModel } from "../entity/model/orderModel";
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";


export const deleteOrderService = async (id: string): Promise<{ deletedCount: number } | null> => {
  try {
    if (!id) throw new Error(`No order id provided`);
    return await deleteOneResourceById(orderModel)(id);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};
