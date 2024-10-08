import { authAdminLoginUserService } from '../services';
import { NextFunction, Request, Response } from 'express';
import { LoginUser } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const authAdminLoginUserController = async (req: Request<{}, {}, LoginUser>, res: Response, next: NextFunction) => {
  try {
    const response = await authAdminLoginUserService(req.body);
    res.status(200).json(response);
  } catch (error: any) {
    next(new ApplicationError(401, error.message));
  }
};
