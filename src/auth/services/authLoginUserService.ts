import { logger } from '../../logger/appLoger';
import { LoginUser } from '../../user/entity/types/User';
import { authCreateTokenService } from './authCreateTokenService';
import { authValidateUserService } from './authValidateUserService';

export type TokenResponse = {
  authToken: string;
  username: string;
};

export const authLoginUserService = async (userRequest: LoginUser): Promise<TokenResponse> => {
  try {
    const user = await authValidateUserService(userRequest);
    if (!user.valid) throw new Error('user is not valid ');
    console.log('user');
    console.log(user);
    const tokens = await authCreateTokenService(user.id, user.isAdmin!);
    console.log('tokens');
    console.log(tokens);
    return { ...tokens, username: user.username };
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'authLoginUserService',
      trace: error.message,
    });
    throw new Error(`Error login user: ${error.message}`);
  }
};
