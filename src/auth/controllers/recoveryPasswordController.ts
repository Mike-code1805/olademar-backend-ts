import { authSendRecoverPasswordEmail } from '../services/authSendRecoverPasswordEmail';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';
import { getOneUserByEmailService } from '../../user/services';

export const recoveryPasswordController = async (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getOneUserByEmailService(req.body.email);
    if (!user) throw new Error('user does not exist ');

    await authSendRecoverPasswordEmail(user.id, user.email, user.password);
    res.status(200).json({ message: 'user validated' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
