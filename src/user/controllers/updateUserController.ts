import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { updateUserService } from '../services/updateUserService';

export const updateUser = async (req:Request, res:Response,  next: NextFunction) => {
    try{
        const users = await updateUserService(req.params.id, req.body);
        res.status(200).json({ message : "updated" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error updating the user'));
    }
};
  