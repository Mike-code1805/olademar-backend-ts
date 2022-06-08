
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";
import { User } from "../entity/types/User";
import { userModel } from "../entity/userModel";


export const updateUserService = async (userId: string,
    user: { username?: string; email?: string; img?: string}
    ): Promise<User | null | undefined > => {
    try {
        if (!userId) throw new Error(`No user id provided`);
        const editedUser = await updateOneResourceById(userModel)(
          userId,
          user
        );
        return editedUser
    } catch (error: any) {
        
    }
};