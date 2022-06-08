import mongoose from "mongoose";

import { Cart } from "../types/Cart";

const Schema = mongoose.Schema;

export const cartSchemma = new Schema<Cart>({
    created_at: { 
        type: Date,
        default: Date.now,
    },
    updated_at: { 
        type: Date,
        default: Date.now,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
});
