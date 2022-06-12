import { authCreateTokenService } from '../services/authCreateTokenService';
import { NextFunction, Request, Response } from 'express';
import { CreateUser } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { authSendValidateUserEmail } from '../services/authSendValidateUserEmail';
import { authCreateUserAccountService } from '../services/authCreateUserAccountService';

export const authSignup = async (
    req: Request<{}, {}, CreateUser>,
    res: Response,
    next: NextFunction
) => {
    try {        
        await authCreateUserAccountService(req.body);
        res.status(201).json({success: true});
    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
};
