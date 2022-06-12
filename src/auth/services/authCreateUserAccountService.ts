// import logger from '../../shared/logger/appLogger';
// import { CreateUser } from '../../users/entity/types/User';
// import { createUserService } from '../../users/services/createUserService';
// import { authSendValidateUserEmail } from './authSendValidationUserEmail';

import { logger } from "../../logger/appLoger";
import { CreateUser } from "../../user/entity/types/User";
import { authCreateUserService } from "./authCreateUserService";
import { authSendValidateUserEmail } from "./authSendValidateUserEmail";

export const authCreateUserAccountService = async (
  userRequest: CreateUser
): Promise<void> => {
  try {
    const newUser = await authCreateUserService(userRequest);
    await authSendValidateUserEmail(newUser.id, newUser.email, newUser.password);
  } catch (error: any) {
    logger.error('Error creating user account', {
      instance: 'services',
      fn: 'authCreateUserAccountService',
      trace: error.message,
    });
    throw new Error('Error creating user account');
  }
};
