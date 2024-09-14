import { logger } from '../../logger/appLoger';
import { userModel } from '../entity/model/userModel';
import { User } from '../entity/types/User';

export const getOneUserEncryptedService = async (userId: string): Promise<any | null> => {
  try {
    const user = await userModel.findOne({ _id: userId }, 'username email avatarUrl phone address type_user');

    if (!user) throw new Error('user not found');

    return {
      username: user.username,
      email: user.email.replace(/(?<=.{3}).*(?=@)/, (m) => '*'.repeat(m.length)),
      avatarUrl: user.avatarUrl,
      phone: {
        code: user.phone.code,
        value: user.phone.value,
        // value: user.phone.value.length > 3 ? `${user.phone.value.slice(0, 3)}${'*'.repeat(user.phone.value.length - 3)}` : user.phone.value,
      },
      address: user.address,
      type_user: user.type_user,
    };
  } catch (error: any) {
    logger.error(`error getting user with id ${userId}`, {
      service: 'getOneUserEncryptedService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
