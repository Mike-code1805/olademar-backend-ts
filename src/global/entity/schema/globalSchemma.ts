import mongoose from 'mongoose';
import { Global } from '../types/Global';

const Schema = mongoose.Schema;

export const globalSchemma = new Schema<Global>({
  country: {
    type: Object,
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
