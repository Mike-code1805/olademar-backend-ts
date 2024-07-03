import mongoose from 'mongoose';
import { Product } from '../types/Product';

const Schema = mongoose.Schema;

export const productSchemma = new Schema<Product>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  shortdescription: {
    type: String,
  },
  images: [{
    data: Buffer,
    contentType: String,
  }],
  categories: [
    {
      type: String,
    },
  ],
  dimensions: {
    type: String,
  },
  price: {
    type: Number,
  },
  ofert: {
    type: Number,
    default: undefined,
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
