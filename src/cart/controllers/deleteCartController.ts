import { deleteCartService } from '../services/deleteCartService';
import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';


export const deleteCart = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const cart = await deleteCartService(req.params.id);
        res.status(200).json({ message : "deleted" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error deleting the cart'));
    }
};