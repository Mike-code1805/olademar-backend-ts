import { cartModel } from '../../cart/entity/model/cartModel';
import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { updateCartService } from '../../cart/services/updateCartService';

export const updateCart = async (req:Request, res:Response,  next: NextFunction) => {
    try{
        const users = await updateCartService(req.params.id, req.body);
        res.status(200).json({ message : "updated" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error updating the cart'));
    }
};