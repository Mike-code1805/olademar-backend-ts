
import { ApplicationError } from '../../customErrors/ApplicationError';

// export const updateOneResourceById = <K>(Model: ModelType<K>) =>
//   async (id: any, query: any): Promise<{ deletedCount: number } | null> => {
//     try {
//       return await Model.findByIdAndUpdate(id, query);
//     } catch (error: any) {
//       throw new ApplicationError(400, error.message);
//     }
// };

import { Model as ModelType, ObjectId, Types } from 'mongoose';

export const updateOneResourceById = <K>(Model: ModelType<K>) =>
    async (id: string | ObjectId, query: object): Promise<K | null> => {    
    try {
        const resourceId = typeof id === 'string' ? new Types.ObjectId(id) : id;
        return await Model.findOneAndUpdate({ id: resourceId, }, query, { new: true, });
    } catch (error: any) {
        throw new ApplicationError(400, error.message);
    }      
};