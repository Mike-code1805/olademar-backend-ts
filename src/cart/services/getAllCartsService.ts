import { findFiveNewResources } from "../../shared/factory/findFiveNewResources";
import { logger } from "../../logger/appLoger";
import { findAllResources } from "../../shared/factory/findAllResources";
import { Cart } from "../entity/types/Cart";
import { cartModel } from "../entity/model/cartModel";
// import { userModel } from "../entity/userModel";
// import { User } from "../entity/types/User";

export const getAllCartsService = async (): Promise<Cart[]> => {
  try {
    const carts: Cart[] = await findAllResources(cartModel)();
    return carts;
  } catch (error: any) {
    logger.error('error getting the carts', {
      service: 'getAllCartsService',
      trace: error.message,
    });
    throw new Error('error getting the carts');
  }
};
