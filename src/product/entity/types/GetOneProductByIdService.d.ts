export interface GetOneProductByIdServiceProps {
  _id: string;
  image: { data: string };
  title: string;
  description: string;
  shortdescription: string;
  dimensions: string;
  price: number;
  ofert: number | undefined;
}
