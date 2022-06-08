import { NextFunction, Request, Response }  from 'express';
import { orderModel } from '../entity/model/orderModel';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';

export const getMonthlyIncomeOrders = async (req: Request, res: Response, next: NextFunction) => {

    const productId = req.query.id;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await orderModel.aggregate([
        {
            $match: {
                created_at: { $gte: previousMonth },
                ...(productId && {
                products: { $elemMatch: { productId } },
            }),
            },
        },
        {
            $project: {
            month: { $month: "$created_at" },
            sales: "$amount",
            },
        },
        {
            $group: {
            _id: "$month",
            total: { $sum: "$sales" },
            },
        },
        ]);

        res.status(200).json(income);
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
            next(new ApplicationError(400, 'error getting the orders'));
    }
};