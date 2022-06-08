import { getOneCartByIdService } from '../services/getOneCartByIdService';
import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';


export const getCartById = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const cart = await getOneCartByIdService(req.params.id);
        res.status(200).json({ cart });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the cart'));
    }
  };