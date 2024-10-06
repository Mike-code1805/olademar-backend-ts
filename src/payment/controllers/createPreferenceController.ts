import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { createPreferenceService } from '../services';
import { Types } from 'mongoose';
import { generateUserOrderNumber } from '../../order/services/generateUserOrderNumber';

export const createPreferenceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { userId } = req.params;
    const { items, address, totalAmount, userInfo } = req.body;

    const userOrderNumber = await generateUserOrderNumber(userId);

    const response = await createPreferenceService({
      userId: new Types.ObjectId(userId),
      userOrderNumber,
      items,
      totalAmount,
      address,
      userInfo,
      status: 'pending',
    });

    res.status(201).json(response);
  } catch (error: any) {
    next(new ApplicationError(403, error.message));
  }
};
