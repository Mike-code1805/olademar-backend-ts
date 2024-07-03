import { NextFunction, Request, Response } from 'express';
import { CreateUser } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { authSignupUserGoogleService } from '../services';

export const authSignupUserGoogleController = async (req: Request<{}, {}, CreateUser>, res: Response, next: NextFunction) => {
  try {
    const response = await authSignupUserGoogleService(req.body);
    res.status(201).json(response);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
