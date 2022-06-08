
import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getAllOrdersService } from '../services/getAllOrdersService';


export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = await getAllOrdersService();
        res.status(200).json(orders);
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the orders'));
    }
};