import { Product } from "product/entity/types/Product";
import { UserId } from "user/entity/types/User";

export interface Cart{
    id: CartId;
    title: string;
    products: Product[];
    created_at: Date; 
    updated_at: Date;
    owner: UserId;
}

export type CreateCart = {
    products: Product[];
    owner: string;
};

// export type CreateCart = Omit<Cart, 'created_at' | 'updated_at' | 'id'>;

export type CartId = {
    _id: Types.ObjectId;
};

export type CartEdit = {
    owner: string;
    products: [
        {
            productId: string
            quantity: number
        }
    ];
}