import { logger } from '../../logger/appLoger';
import { CreateUser, User } from '../../user/entity/types/User';
import { encryptPassword } from '../utils';
import { createResource } from '../../shared/factory/createResource';
import { userModel } from '../../user/entity/model/userModel';
import { getOneUserByEmailService } from '../../user/services';
import { authCreateTokenService } from './authCreateTokenService';
import { TokenResponse } from './authLoginUserService';
import { updateOneResourceById } from '../../shared/factory/updateOneResourceById';

export const authSignupUserGoogleService = async (userRequest: CreateUser): Promise<TokenResponse> => {
  try {
    const userExist: any = await getOneUserByEmailService(userRequest.email);
    if (!userExist) {
      const user: any = await createResource(userModel)(userRequest);
      const tokens = await authCreateTokenService(user.id, userRequest.isAdmin);
      return { ...tokens, username: user.username };
    } else {
      const user: any = await updateOneResourceById(userModel)(userExist.id, userRequest);
      const tokens = await authCreateTokenService(user.id, userRequest.isAdmin);
      return { ...tokens, username: user.username };
    }
  } catch (error: any) {
    logger.error('Error creating user account', {
      instance: 'services',
      fn: 'authSignupUserGoogleService',
      trace: error.message,
    });
    throw new Error('Error creating user account');
  }
};
