import { logger } from "../../logger/appLoger";
import { userModel } from "../entity/userModel";
import { User } from "../entity/types/User";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";

export const getOneUserByIdService = async (id: string ): Promise< User | null> => {
    try {
      const user: User[] = await findOneResourceById(userModel)(id);
      return user[0]
    } catch (error: any) {
      logger.error(`error getting user with id ${id}`, {
        service: 'getOneUserByIdService',
        trace: error.message,
      });
      throw new Error(error.message);
    }
};
