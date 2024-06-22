import { Types } from 'mongoose';
import { Product } from 'product/entity/types/Product';
import { ProductId } from '../../../product/entity/types/Product';
import { UserIdType } from '../../../user/entity/types/User';

export interface Order {
  id: OrderId;
  userId: UserIdType;
  items: {
    productId: ProductId;
    counter: number;
  }[];
  totalAmount: number;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  status: 'pending' | 'shipped' | 'shipped' | 'delivered' | 'cancelled';
  created_at: Date;
  updated_at: Date;
}

export type CreateOrder = Omit<Order, 'created_at' | 'updated_at' | 'id'>;

export type OrderId = {
  _id: Types.ObjectId;
};
