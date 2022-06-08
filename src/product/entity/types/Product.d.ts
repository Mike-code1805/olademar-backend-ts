export interface Product{
    id: ProductId;
    title: string,
    desc: string,
    img: string,
    categories: Array<string>,
    dimension: string,
    price: number,
    created_at: Date,    
    updated_at: Date,
}

export type CreateProduct = Omit<Product, 'created_at' | 'updated_at' | 'id'>;

export type ProductId = {
    id: Types.ObjectId;
};