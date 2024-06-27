import { NextFunction, Request, Response }  from 'express';
import { userModel as User } from '../entity/model/userModel';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';

export const getStatsUsers = async (_req:Request, res:Response,  next: NextFunction) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { created_at: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$created_at" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err:any) {
    logger.error('error', 'hello', { message: err.message });
    next(new ApplicationError(400, 'error getting stats of user'));
  }
};
