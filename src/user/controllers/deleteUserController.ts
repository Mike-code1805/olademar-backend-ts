import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { deleteUserService } from '../services/deleteUserService';

export const deleteUser = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const users = await deleteUserService(req.params.id);
        res.status(200).json({ message : "deleted" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error deleting the user'));
    }
};