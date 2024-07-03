import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getOneUserByIdService } from '../../user/services/getOneUserByIdService';
import { updateUserService } from '../../user/services/updateUserService';
import { encryptPassword } from '../utils/passwordManager';
import { validateAuthToken } from '../utils/tokenManager';

export const updatePasswordController = async (
  req: Request<{ id: string; token: string }, {}, { password: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const user = await getOneUserByIdService(id);
    if (!user) throw new Error('user does not exist ');
    //validate token

    const newPassword = await encryptPassword(password);

    const userValid = await updateUserService(id,{password: newPassword},);

    res.status(200).json({ message: userValid });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
