import { logger } from '../../logger/appLoger';
import { LoginUser, UserId } from '../../user/entity/types/User';
import { authCreateTokenService } from './authCreateTokenService';
import { authValidateUserService } from './authValidateUserService';

export type TokenResponse = {
  id: UserId;
  authToken: string;
  username: string;
};

export const authAdminLoginUserService = async (userRequest: LoginUser): Promise<TokenResponse> => {
  try {
    const user = await authValidateUserService(userRequest);
    if (!user.valid) throw new Error('El usuario no está validado.');
    if (!user.isAdmin) throw new Error('El usuario no es una administradora.');
    const tokens = await authCreateTokenService(user.id, user.isAdmin);
    return { ...tokens, id: user.id, username: user.username };
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'authAdminLoginUserService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
