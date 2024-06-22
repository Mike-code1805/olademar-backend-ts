import { ProductId } from '../../../product/entity/types/Product';
import { UserIdType } from '../../../user/entity/types/User';

export interface Comment {
  id: CommentId;
  userId: UserIdType;
  productId: ProductId;
  commentText: string;
  rating: number;
  replies: Types.ObjectId[];
  isFlagged: boolean;
  status: 'published' | 'pending' | 'deleted';
  userName: string;
  created_at: Date;
  updated_at: Date;
}

export type CreateComment = Omit<Comment, 'created_at' | 'updated_at' | 'id'>;

export type CommentId = {
  id: Types.ObjectId;
};
