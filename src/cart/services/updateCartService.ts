
import { Cart, CartEdit } from "../entity/types/Cart";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";
import { cartModel } from "../entity/model/cartModel";
import { ObjectId } from "mongoose";
// import { User } from "../entity/types/User";
// import { userModel } from "../entity/userModel";


export const updateCartService = async (cartId: string,
    cart: {body?: string}
    ): Promise<Cart | null | undefined > => {
    try {
        if (!cartId) throw new Error(`No cart id provided`);
        const editedCart = await updateOneResourceById(cartModel)(
            cartId,
            cart
        );
        return editedCart;
    } catch (error: any) {
        
    }
};