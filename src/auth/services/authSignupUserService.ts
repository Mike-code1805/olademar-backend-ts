import { logger } from '../../logger/appLoger';
import { CreateUser, User } from '../../user/entity/types/User';
import { encryptPassword } from '../utils';
import { createResource } from '../../shared/factory/createResource';
import { userModel } from '../../user/entity/model/userModel';
import { getOneUserByEmailService } from '../../user/services/getOneUserByEmailService';

export const authSignupUserService = async (userRequest: CreateUser): Promise<User> => {
  try {
    const userEmail = await getOneUserByEmailService(userRequest.email);
    if (!userEmail) {
      const password = await encryptPassword(userRequest.password);
      const user = await createResource(userModel)({ ...userRequest, password });
      // await authSendValidateUserEmail(newUser.id, newUser.email, newUser.password);
      return user as User;
    } else if (userEmail.type_user === 'google') throw new Error('DEBE ACCEDER MEDIANTE GOOGLE.');
    else throw new Error('Este correo no puede ser usado.');
  } catch (error: any) {
    logger.error('Error creating user account', {
      instance: 'services',
      fn: 'authSignupUserService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
