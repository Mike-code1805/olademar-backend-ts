import mongoose from 'mongoose';
import { globalSchemma } from '../schema/globalSchemma';
import { Global } from '../types/Global';

export const globalModel = mongoose.model<Global>('Global', globalSchemma);
