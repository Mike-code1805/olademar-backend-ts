import { logger } from '../../logger/appLoger';
import { updateOneResourceById } from '../../shared/factory/updateOneResourceById';
import { EditUser, User } from '../entity/types/User';
import { userModel } from '../entity/model/userModel';
import { getOneUserByIdService } from './getOneUserByIdService';

export const updateOneUserService = async (userId: string, data: EditUser): Promise<User | null | undefined> => {
  try {
    const currentUser = await getOneUserByIdService(userId);
    if (!currentUser) throw new Error('User Does not exist');
    if (!userId) throw new Error(`No user id provided`);

    return await updateOneResourceById(userModel)(userId, data);
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'updateOneUserService',
      trace: error.message,
    });
    throw new Error('error updating the users');
  }
};
