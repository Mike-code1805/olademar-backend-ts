import mongoose from 'mongoose';
import { Order } from '../types/Order';

const Schema = mongoose.Schema;

export const orderSchemma = new Schema<Order>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      counter: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  status: { type: String, required: true, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
});
