import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { getAllUsersService } from '../services/getAllUsersService';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUsersService(req.params.id, req.query.new);
        res.status(200).json(users);
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the users'));
    }
};