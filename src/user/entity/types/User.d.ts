import { Types } from 'mongoose';

export interface User {
  id: UserId;
  username: string;
  email: string;
  isAdmin: boolean;
  password: string;
  avatar: {
    data: Buffer;
    contentType: String;
  };
  avatarUrl: string;
  phone: {
    code: string;
    value: string;
  };
  address: {
    country: string;
    state: string;
    province: string;
    district: string;
    reference: string;
  };
  valid: boolean;
  type_user: 'google' | 'facebook' | 'normal';
  created_at: Date;
  updated_at: Date | null;
}

export type EditUser = {
  id: string;
  username?: string;
  email?: string;
  isAdmin?: boolean;
  password?: string;
  img?: string;
  updated_at?: Date | null;
  valid?: boolean;
};

export type UserId = {
  _id: Types.ObjectId;
};

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;

export type LoginUser = {
  password: string;
  email: string;
};
