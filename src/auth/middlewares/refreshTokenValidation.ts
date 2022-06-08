import { ApplicationError } from '../../customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';
import { validateRefreshToken } from '../utils/tokenManager';
// import { ApplicationError } from '../../shared/customErrors/ApplicationError';
// import { validateRefreshToken } from '../utils/tokenManager';

export const refreshTokenValidation = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    try {
        const { authorization } = req.headers;
        if (!authorization)
        return next(new ApplicationError(401, 'No token provided'));

        const { id } = validateRefreshToken(authorization);

        if (!id) return next(new ApplicationError(401, 'Unvalid token'));

        req.userId = id;

        next();
    } catch (error: any) {
        if (error.message === 'jwt expired')
        return next(new ApplicationError(401, error.message));
        next(error);
    }
};
