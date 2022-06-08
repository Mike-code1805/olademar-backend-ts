import mongoose from "mongoose";
import { cartSchemma } from "../schema/cartSchema";
import { Cart } from "../types/Cart";


export const cartModel = mongoose.model<Cart>('Cart', cartSchemma);