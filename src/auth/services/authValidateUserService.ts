// import { LoginUser, User } from '../../users/entity/types/User';

import { logger } from '../../logger/appLoger';
import { validatePassword } from '../utils/passwordManager';
import { getOneUserByEmailService } from '../../user/services';
import { LoginUser, User } from '../../user/entity/types/User';

export const authValidateUserService = async (userRequest: LoginUser): Promise<User> => {
  try {
    const user = await getOneUserByEmailService(userRequest.email);
    if (!user) throw new Error('user email or password is incorrect');
    const auth = await validatePassword(userRequest.password, user.password);
    if (!auth) throw new Error('user email or password is incorrect');

    return user;
  } catch (error: any) {
    logger.error('Error validating user credentials', {
      instance: 'services',
      fn: 'authValidateUserService',
      trace: error.message,
    });
    throw new Error('Error validating user credentials');
  }
};
