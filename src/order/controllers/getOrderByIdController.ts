import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getOneOrderByIdService } from '../services/getOneOrderByIdService';

export const getOrderById = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const order = await getOneOrderByIdService(req.params.id);
        res.status(200).json(order);
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the order'));
    }
};