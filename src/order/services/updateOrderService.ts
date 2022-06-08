
import { orderModel } from "../entity/model/orderModel";
import { Order } from "../entity/types/Order";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";
import { logger } from "../../logger/appLoger";

export const updateOrderService = async (cartId: string,
    cart: {body?: string}
    ): Promise<Order | null | undefined > => {
    try {
        if (!cartId) throw new Error(`No order id provided`);
        const editedOrder = await updateOneResourceById(orderModel)(
            cartId,
            cart
        );
        return editedOrder;
    } catch (error: any) {
        logger.error(`error getting order with id ${cartId}`, {
            service: 'updateOrderService',
            trace: error.message,
        });
        throw new Error(error.message);
    }
};