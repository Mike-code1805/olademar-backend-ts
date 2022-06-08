
import { cartModel } from "../entity/model/cartModel";
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";


export const deleteCartService = async (id: string): Promise<{ deletedCount: number } | null> => {
  try {
    if (!id) throw new Error(`No cart id provided`);
    return await deleteOneResourceById(cartModel)(id);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};
