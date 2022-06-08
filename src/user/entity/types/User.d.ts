import { Types } from "mongoose";

export interface User {
    id: UserIdType;
    username?: string;
    email: string;
    isAdmin: boolean;
    password: string;
    img: string;
    created_at: Date;
    updated_at: Date | null;
  }

export type UserIdType = {
    _id: Types.ObjectId;
};

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;

export type LoginUser = {
    password: string;
    email: string;
};