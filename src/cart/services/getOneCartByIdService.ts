import { Cart } from "../entity/types/Cart";
import { logger } from "../../logger/appLoger";
import { cartModel } from "../entity/model/cartModel";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";

export const getOneCartByIdService = async (id: string ): Promise< Cart | null> => {
    try {
      const user: Cart[] = await findOneResourceById(cartModel)(id);
      return user[0]
    } catch (error: any) {
      logger.error(`error getting cart with id ${id}`, {
        service: 'getOneCartByIdService',
        trace: error.message,
      });
      throw new Error(error.message);
    }
};
