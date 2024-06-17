import { LikeId } from '../../../like/entity/types/Like';
import { UserIdType } from '../../../user/entity/types/User';
import { ProductId } from '../../../product/entity/types/Product';

export interface Like {
  id: LikeId;
  userId: LikeId;
  productId: ProductId;
  created_at: Date;
  updated_at: Date;
}

export type CreateLike = Omit<Like, 'created_at' | 'updated_at' | 'id'>;

export type LikeId = {
  id: Types.ObjectId;
};
