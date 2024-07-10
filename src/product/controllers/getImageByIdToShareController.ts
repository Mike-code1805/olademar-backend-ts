import { NextFunction, Request, Response } from 'express';
import { getImageByIdToShareService } from '../services';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';

export const getImageByIdToShareController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const image = await getImageByIdToShareService(req.params.id);
    res.send(`<img src="http://localhost:5000/api/products/imagedata/668eb6de7115f70955e1d3af" style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms; width: 200px; height: 200px;" alt="Product Image" />`);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'Ocurrió un error al obtener la lista de productos. Por favor intente nuevamente.'));
  }
};
