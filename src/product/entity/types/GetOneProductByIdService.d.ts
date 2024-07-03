import { Comment } from '../../../comment/entity/types/Comment';

export interface GetOneProductByIdServiceProps {
  id: string;
  images: { data: string }[];
  title: string;
  description: string;
  shortdescription: string;
  dimensions: string;
  price: number;
  ofert: number | undefined;
  isFavorite: boolean;
  isLiked: boolean;
  likesCount: number;
  comments: Comment[];
}
