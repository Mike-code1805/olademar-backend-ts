import { NextFunction, Request, Response } from 'express';
import { getImageByIdToShareService } from '../services';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';

export const getImageByIdToShareController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const image = await getImageByIdToShareService(req.params.id);
    res.setHeader('Content-Type', 'text/html');
    res.send(`<img src="${image}" alt="Product Image" />`);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'Ocurrió un error al obtener la lista de productos. Por favor intente nuevamente.'));
  }
};
