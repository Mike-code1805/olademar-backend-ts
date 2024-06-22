import { ProductId } from '../../../product/entity/types/Product';
import { UserIdType } from '../../../user/entity/types/User';
export interface PostalCode {
  code: string;
}

export interface City {
  name: string;
  postalCodes: string[];
}

export interface State {
  name: string;
  code: string;
  cities: City[];
}

export interface Country {
  name: string;
  code: string;
  states: State[];
}

export interface Global {
  id: GlobalId;
  country: Country;
  created_at: Date;
  updated_at: Date;
}

export type CreateGlobal = Omit<Global, 'created_at' | 'updated_at' | 'id'>;

export type GlobalId = {
  id: Types.ObjectId;
};
