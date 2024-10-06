import { NextFunction, Request, Response } from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import { updateCartStatusService } from '../services';

export const updateCartStatusController = async (
  req: Request<{ id: string; status: 'pending' | 'confirmed' | 'cancelled' }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, status } = req.params;
    console.log(id, status);
    await updateCartStatusService(id, status);
    res.status(200).json({ message: 'updated' });
  } catch (error: any) {
    next(new ApplicationError(400, 'error updating the cart'));
  }
};
