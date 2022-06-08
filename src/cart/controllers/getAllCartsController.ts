import { getAllCartsService } from '../services/getAllCartsService';
import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';


export const getCarts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const carts = await getAllCartsService();
        res.status(200).json(carts);
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the carts'));
    }
};