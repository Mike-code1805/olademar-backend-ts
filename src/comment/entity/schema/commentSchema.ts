import mongoose from 'mongoose';
import { Comment } from '../types/Comment';

const Schema = mongoose.Schema;

export const commentSchemma = new Schema<Comment>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  commentText: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: 0,
  },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  isFlagged: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['published', 'pending', 'deleted'],
    default: 'pending',
  },
  userName: {
    type: String,
    required: true,
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
