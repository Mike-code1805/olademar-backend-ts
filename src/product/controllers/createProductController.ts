import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneProductService } from '../services/createOneProductService';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, categories, dimensions, price, shortdescription, ofert } = req.body;
    if (!req.file) throw new Error('No file uploaded');
    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
    await createOneProductService({
      title,
      description,
      image,
      categories,
      dimensions,
      price,
      shortdescription,
      ofert,
    });
    res.status(201).json('Created');
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'error getting the users'));
  }
};
