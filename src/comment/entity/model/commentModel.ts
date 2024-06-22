import mongoose from 'mongoose';
import { commentSchemma } from '../schema/commentSchema';
import { Comment } from '../types/Comment';

export const commentModel = mongoose.model<Comment>('Comment', commentSchemma);
