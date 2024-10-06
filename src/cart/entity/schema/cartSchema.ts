import mongoose from 'mongoose';

import { Cart } from '../types/Cart';

const Schema = mongoose.Schema;

export const cartSchemma = new Schema<Cart>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      counter: { type: Number, required: true },
    },
  ],
  userOrderNumber: { type: String, required: true },
  userInfo: {
    username: { type: String, required: true },
    phone: { code: { type: String, required: true }, value: { type: String, required: true } },
  },
  totalAmount: { type: Number, required: true },
  address: {
    country: { type: String, required: true },
    state: { type: String, required: true },
    province: { type: String, required: true },
    district: { type: String, required: true },
    reference: { type: String, default: '' },
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
