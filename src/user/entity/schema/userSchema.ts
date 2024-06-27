import mongoose from 'mongoose';
import { User } from '../types/User';

const Schema = mongoose.Schema;

export const userSchemma = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    data: {
      type: Buffer,
      default: '',
    },
    contentType: {
      type: String,
      default: '',
    },
  },
  avatarUrl: {
    type: String,
    default: '',
  },
  address: {
    country: { type: String, default: '' },
    state: { type: String, default: '' },
    province: { type: String, default: '' },
    district: { type: String, default: '' },
    reference: { type: String, default: '' },
  },
  phone: {
    type: String,
    default: '',
  },
  valid: {
    type: Boolean,
    default: true,
  },
  type_user: { type: String, required: true, enum: ['google', 'facebook', 'normal'], default: 'normal' },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
