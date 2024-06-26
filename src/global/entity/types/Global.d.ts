import { ProductId } from '../../../product/entity/types/Product';
import { UserIdType } from '../../../user/entity/types/User';

export interface District {
  name: string;
  postalCodes: string[];
}

export interface Province {
  name: string;
  code: string;
  districts: District[];
}

export interface State {
  name: string;
  code: string;
  provinces: Province[];
}

export interface Country {
  name: string;
  code: string;
  states: State[];
}

export interface Global {
  id: GlobalId;
  countries: Country[];
  created_at: Date;
  updated_at: Date;
}

export type CreateGlobal = Omit<Global, 'created_at' | 'updated_at' | 'id'>;

export type GlobalId = {
  id: Types.ObjectId;
};
