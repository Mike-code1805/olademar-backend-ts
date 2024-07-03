import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneProductService } from '../services/createOneProductService';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, categories, dimensions, price, shortdescription, ofert } = req.body;
    if (!req.files) throw new Error('No file uploaded');
    console.log(req.files);
    const images = (req.files as Express.Multer.File[]).map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));
    console.log(images);

    await createOneProductService({
      title,
      description,
      images,
      categories,
      dimensions,
      price,
      shortdescription,
      ofert,
    });
    res.status(201).json('Created');
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, error.message));
  }
};
