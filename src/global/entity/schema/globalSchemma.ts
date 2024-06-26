import mongoose from 'mongoose';
import { Global } from '../types/Global';

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  code: String,
  states: [
    {
      name: String,
      code: String,
      provinces: [
        {
          name: String,
          code: String,
          districts: [
            {
              name: String,
              postalCodes: [String],
            },
          ],
        },
      ],
    },
  ],
});

export const globalSchemma = new Schema<Global>({
  countries: [countrySchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
