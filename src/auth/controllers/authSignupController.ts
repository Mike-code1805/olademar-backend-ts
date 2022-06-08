import { authCreateTokenService } from '../services/authCreateTokenService';
import { NextFunction, Request, Response } from 'express';
import { CreateUser } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { authCreateUserService } from '../services/authCreateUserService';

export const authSignup = async (
    req: Request<{}, {}, CreateUser>,
    res: Response,
    next: NextFunction
) => {
    try {        
        const newUser = await authCreateUserService(req.body);
        const token = authCreateTokenService(newUser.id, newUser.isAdmin);
        res.status(200).json(newUser);
    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
};
