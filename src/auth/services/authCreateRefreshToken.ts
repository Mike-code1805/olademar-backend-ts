// import { createResource } from '../../shared/factory/createResource';
// import logger from '../../shared/logger/appLogger';
// import { UserId } from '../../users/entity/types/User';
// import { createRefreshToken } from '../utils/tokenManager';
// import { TokenModel } from '../entity/model/authTokenModel';

import { createRefreshToken } from "../utils/tokenManager";
import { UserId } from "../../user/entity/types/User";
import { TokenModel } from "../entity/model/authTokenModel";
import { logger } from "../../logger/appLoger";

export const authCreateRefreshToken = async (
  userId: string | UserId
): Promise<string> => {
  try {
    const refreshToken = createRefreshToken({ id: userId });
    const token = new TokenModel({
      owner: userId,
      token: refreshToken,
    });
    const newToken = await token.save();
    return newToken.token;
  } catch (error: any) {
    logger.error('error creating a refresh token service', {
      instance: 'services',
      service: 'authCreateRefreshToken',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a new refresh token ${error.message}`);
  }
};
