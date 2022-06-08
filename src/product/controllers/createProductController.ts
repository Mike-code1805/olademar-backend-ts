import { NextFunction, Request, Response }  from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneProductService } from '../services/createOneProductService';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {title, desc, img, categories, dimension, price} = req.body;
        const product = await createOneProductService({
            title, desc, img, categories, dimension, price
        });

        res.status(200).json(product);

    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the users'));
    }
}