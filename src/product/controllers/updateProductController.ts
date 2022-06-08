import { NextFunction, Request, Response }  from 'express';
import { updateProductService } from '../services/updateProductService';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
// import { updateUserService } from '../services/updateUserService';

export const updateProduct = async (req:Request, res:Response,  next: NextFunction) => {
    try{
        const users = await updateProductService(req.params.id, req.body);
        res.status(200).json({ message : "updated" });
    } catch (error: any) {
        next(new ApplicationError(400, 'error updating the user'));
    }
};
  