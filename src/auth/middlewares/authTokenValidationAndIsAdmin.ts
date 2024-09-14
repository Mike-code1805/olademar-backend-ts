import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../utils/tokenManager';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const authTokenValidationAndIsAdmin = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return next(new ApplicationError(400, 'No se provisionó el token de consulta de usuario.'));

    const isValid: any = validateAuthToken(authorization);

    if (!isValid) return next(new ApplicationError(401, 'No se pudo reconocer el identificador del usuario.'));

    if (!isValid.isAdmin) return next(new ApplicationError(401, 'Este usuario no es administrador.'));

    next();
  } catch (error: any) {
    if (error.message === 'jwt expired') return next(new ApplicationError(401, 'Please log in again'));
    next(new ApplicationError(403, 'access denied'));
  }
};
