export interface Product {
  id: ProductId;
  title: string;
  description: string;
  shortdescription: string;
  images: {
    data: Buffer;
    contentType: String;
  }[];
  categories: Array<string>;
  dimensions: string;
  price: number;
  ofert: number | undefined;
  created_at: Date;
  updated_at: Date;
}

export type CreateProduct = Omit<Product, 'created_at' | 'updated_at' | 'id'>;

export type ProductId = {
  id: Types.ObjectId;
};
