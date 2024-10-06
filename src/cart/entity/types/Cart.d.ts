import { ProductId } from '../../../product/entity/types/Product';
import { UserId } from '../../../user/entity/types/User';

export interface Cart {
  id: CartId;
  userId: UserId;
  userOrderNumber: string;
  items: { productId: ProductId; counter: number }[];
  userInfo: {
    username: string;
    phone: { code: string; value: string };
  };
  totalAmount: number;
  address: {
    country: string;
    state: string;
    province: string;
    district: string;
    reference: string;
  };
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: Date;
  updated_at: Date;
}

export type CreateCart = Omit<Cart, 'created_at' | 'updated_at' | 'id'>;

// export type CreateCart = Omit<Cart, 'created_at' | 'updated_at' | 'id'>;

export type CartId = {
  _id: Types.ObjectId;
};

export type CartEdit = {
  owner: string;
  products: [
    {
      productId: string;
      quantity: number;
    }
  ];
};
