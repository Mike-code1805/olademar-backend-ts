import { ApplicationError } from '../../customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../utils/tokenManager';
import { getOneUserByIdService } from '../../user/services/getOneUserByIdService';

export const userTokenValidationParams = async (
  req: Request<{ id: string; token: string }, {}, {}>,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { id, token} = req.params;
    if (!token) return next(new ApplicationError(401, 'No token provided'));
    const user = await getOneUserByIdService(id);
    if (!user) throw new Error('user does not exist ');
    const  valid = validateAuthToken(token, user.password);
    if (!valid) return next(new ApplicationError(401, 'Invalid token'));

    req.userId = id;

    next();
  } catch (error: any) {
    if (error.message === 'jwt expired')
      return next(new ApplicationError(401, error.message));
    console.log(error.message);
    next(error);
  }
};