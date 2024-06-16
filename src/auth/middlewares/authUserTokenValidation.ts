import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../utils/tokenManager';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getOneUserByIdService } from '../../user/services/getOneUserByIdService';

export const authUserTokenValidation = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return next(new ApplicationError(400, 'No se provisionó el token de consulta de usuario.'));

    const { id } = validateAuthToken(authorization);

    if (!id) next(new ApplicationError(400, 'No se pudo reconocer el identificador del usuario.'));

    const user = await getOneUserByIdService(id);
    if (!user) next(new ApplicationError(400, 'No exite el usuario en la base de datos.'));
    req.params.userId = id;
    next();
  } catch (error: any) {
    if (error.message === 'jwt expired') return next(new ApplicationError(401, 'Por favor, vuelva a iniciar sesión.'));
    next(new ApplicationError(401, 'Acceso Denegado.'));
  }
};
