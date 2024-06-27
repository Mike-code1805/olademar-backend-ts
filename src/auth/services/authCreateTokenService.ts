
import { createAuthToken } from "../utils/tokenManager";
import { UserId } from "../../user/entity/types/User";
import { logger } from "../../logger/appLoger";

export const authCreateTokenService = async (
  userId: string | UserId, isAdmin: boolean | UserId
): Promise<{ authToken: string }> => {
  try {
    return {
      authToken: createAuthToken({ id: userId, isAdmin: isAdmin }),
      // refreshToken: await authCreateRefreshToken(userId),
    };
  } catch (error: any) {
    logger.error('Error creating tokens auth token', {
      instance: 'services',
      fn: 'authCreateTokenService',
      trace: error.message,
    });
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
};
