import { Types } from "mongoose";
import { Product } from "product/entity/types/Product";
import { UserIdType } from "user/entity/types/User";

export interface Order{
    id: OrderId;    
    products: Product[];
    amount: number;
    address: Object;
    status: string;
    created_at: Date;    
    updated_at: Date;
    owner: UserIdType;
}

export type CreateOrder = Omit<Order, 'created_at' | 'updated_at' | 'id'>;

// export type CreateOrder = {
//     products: Product[];
//     owner: string;
// };

export type OrderId = {
    _id: Types.ObjectId;
};