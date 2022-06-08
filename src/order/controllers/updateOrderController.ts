import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { updateOrderService } from '../services/updateOrderService';

export const updateOrder = async (req:Request, res:Response,  next: NextFunction) => {
    try{
        const users = await updateOrderService(req.params.id, req.body);
        res.status(200).json({ message : "updated" });
    } catch (error: any) {
        next(new ApplicationError(400, 'error updating the order'));
    }
};