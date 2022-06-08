
import { createAuthToken } from "../utils/tokenManager";
import { UserIdType } from "../../user/entity/types/User";
import { authCreateRefreshToken } from "./authCreateRefreshToken";
import { logger } from "../../logger/appLoger";

export const authCreateTokenService = async (
  userId: string | UserIdType, isAdmin: boolean | UserIdType
): Promise<{ authToken: string; refreshToken: string }> => {
  try {
    return {
      authToken: createAuthToken({ id: userId, isAdmin: isAdmin }),
      refreshToken: await authCreateRefreshToken(userId),
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
