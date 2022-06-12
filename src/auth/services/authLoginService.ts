// import logger from '../../shared/logger/appLogger';
// import { LoginUser } from '../../users/entity/types/User';
// import { authValidateUserService } from './authValidateUserService';
// import { authCreateTokenService } from './authCreateTokenservice';

import { logger } from "../../logger/appLoger";
import { LoginUser } from "../../user/entity/types/User";
import { authCreateTokenService } from "./authCreateTokenService";
import { authValidateUserService } from "./authValidateUserService";

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
};

export const authLoginService = async (
  userRequest: LoginUser
): Promise<TokenResponse> => {
  try {
    const user = await authValidateUserService(userRequest);
    if(!user.valid) throw new Error('user is not valid '); 
    const tokens = await authCreateTokenService(user.id, user.isAdmin);
    return tokens;
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'authLoginService',
      trace: error.message,
    });
    throw new Error(`Error login user: ${error.message}`);
  }
};
