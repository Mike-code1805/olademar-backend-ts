import mongoose from 'mongoose';
import { Favorite } from '../types/Favorite';

const Schema = mongoose.Schema;

export const favoriteSchemma = new Schema<Favorite>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    unique: true,
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
