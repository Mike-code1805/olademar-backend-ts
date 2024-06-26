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
  userOrderNumber: { type: String, required: true },
  userInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  totalAmount: { type: Number, required: true },
  address: {
    country: { type: String, required: true },
    state: { type: String, required: true },
    province: { type: String, required: true },
    district: { type: String, required: true },
    reference: { type: String },
  },
  status: { type: String, required: true, enum: ['Pendiente', 'Confirmado', 'Enviado', 'Recibido'], default: 'Pendiente' },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
