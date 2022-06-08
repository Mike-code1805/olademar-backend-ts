
import { productModel } from "../entity/model/productModel";
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";


export const deleteOneProductService = async (id: string): Promise<{ deletedCount: number } | null> => {
  try {
    if (!id) throw new Error(`No product id provided`);
    return await deleteOneResourceById(productModel)(id);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};
