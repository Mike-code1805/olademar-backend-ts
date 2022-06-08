import { logger } from "../../logger/appLoger";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { Product } from "../entity/types/Product";
import { productModel } from "../entity/model/productModel";

export const getOneProductByIdService = async (id: string ): Promise< Product | null> => {
    try {
      const product: Product[] = await findOneResourceById(productModel)(id);
      return product[0];
    } catch (error: any) {
      logger.error(`error getting user with id ${id}`, {
        service: 'getOneUserByIdService',
        trace: error.message,
      });
      throw new Error(error.message);
    }
};
