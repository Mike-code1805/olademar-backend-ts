import { userModel } from '../entity/model/userModel';
import { User } from '../entity/types/User';
import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
import { logger } from '../../logger/appLoger';

export const getOneUserByEmailService = async (email: string): Promise<User | null> => {
  try {
    const user: User | null = await findOneResourceByField(userModel)({ email });
    return user;
  } catch (error: any) {
    logger.log(`error getting the user with email: ${email}`, {
      service: 'getOneUserByEmailService',
      trace: error.message,
    });
    throw new Error(`error getting the user with email${email}`);
  }
};
