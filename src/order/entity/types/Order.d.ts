import { Types } from 'mongoose';
import { Product } from 'product/entity/types/Product';
import { ProductId } from '../../../product/entity/types/Product';
import { UserId } from '../../../user/entity/types/User';

export interface Order {
  id: OrderId;
  userId: UserId;
  userOrderNumber: string;
  items: {
    productId: ProductId;
    counter: number;
  }[];
  userInfo: {
    name: string;
    phone: string;
  };
  totalAmount: number;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    reference: string,
  };
  status: 'Pendiente' | 'Confirmado' | 'Enviado' | 'Recibido';
  created_at: Date;
  updated_at: Date;
}

export type CreateOrder = Omit<Order, 'created_at' | 'updated_at' | 'id'>;

export type OrderId = {
  _id: Types.ObjectId;
};
