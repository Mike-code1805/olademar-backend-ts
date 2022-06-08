import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { deleteOneProductService } from '../services/deleteOneProductService';

export const deleteProduct = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const users = await deleteOneProductService(req.params.id);
        res.status(200).json({ message : "deleted" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error deleting the product'));
    }
};