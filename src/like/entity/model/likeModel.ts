import mongoose from 'mongoose';
import { likeSchemma } from '../schema/likeSchema';
import { Like } from '../types/Like';

export const likeModel = mongoose.model<Like>('Like', likeSchemma);
