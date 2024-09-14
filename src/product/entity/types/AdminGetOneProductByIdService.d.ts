export interface AdminGetOneProductByIdServiceProps {
  id: string;
  images: string[];
  categories: string[];
  title: string;
  description: string;
  shortdescription: string;
  dimensions: string;
  price: number;
  ofert: number | undefined;
}
