import { logger } from '../../logger/appLoger';
import { getOneUserByIdService } from '../../user/services/getOneUserByIdService';
import { updateOneUserService } from '../../user/services';

export const authValidateUserAccount = async (userId: string): Promise<Boolean> => {
  try {
    const user = await getOneUserByIdService(userId);
    if (!user) throw new Error('user incorrect');
    const userValid = await updateOneUserService(userId, { valid: true });
    console.log({ userValid });
    return userValid?.valid || true;
  } catch (error: any) {
    logger.error('Error validating user email', {
      instance: 'services',
      fn: 'authValidateUserAccount',
      trace: error.message,
    });
    throw new Error('Error validating user email');
  }
};
