import mongoose from "mongoose";
import { Order } from "../types/Order";

const Schema = mongoose.Schema;

export const orderSchemma = new Schema<Order>({
    owner: { 
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
    amount: { 
        type: Number, 
        required: true,
    },
    address: { 
        type: Object, 
        required: true,
    },
    status: { 
        type: String, 
        default: "pending", 
    },
    created_at: { 
        type: Date,
        default: Date.now,
    },
    updated_at: { 
        type: Date,
        default: Date.now,
    }
});


