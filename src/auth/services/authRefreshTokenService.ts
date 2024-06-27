
import { userModel } from "../../user/entity/model/userModel";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { TokenModel } from "../entity/model/authTokenModel";
import { createAuthToken } from "../utils/tokenManager";
import { logger } from "../../logger/appLoger";

export const authRefreshTokenService = async (
  userId: string,
  refreshToken: string
): Promise<{ authToken: string }> => {
  const user = await findOneResourceById(userModel)(userId);

  if (!user) throw new Error('invalid user id');

  const currentToken = await findOneResourceByField(TokenModel)({
    token: refreshToken,
  });
  if (!currentToken) throw new Error('invalid token');

  try {
    return {
      authToken: createAuthToken({ id: userId }),
    };
  } catch (error: any) {
    logger.error('Error renewing auth token', {
      instance: 'services',
      fn: 'authRefreshTokenService',
      trace: error.message,
    });
    throw new Error(error);
  }
};
