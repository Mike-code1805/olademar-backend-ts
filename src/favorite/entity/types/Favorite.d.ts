import { ProductId } from '../../../product/entity/types/Product';
import { UserIdType } from '../../../user/entity/types/User';

export interface Favorite {
  id: FavoriteId;
  userId: UserIdType;
  productId: ProductId;
  created_at: Date;
  updated_at: Date;
}

export type CreateFavorite = Omit<Favorite, 'created_at' | 'updated_at' | 'id'>;

export type FavoriteId = {
  id: Types.ObjectId;
};
