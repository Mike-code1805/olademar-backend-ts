import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneProductService } from '../services/createOneProductService';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, categories, dimensions, price, shortdescription, ofert } = req.body;
    if (!req.files) throw new Error('No file uploaded');

    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    if (!bucketName) {
      throw new Error('AWS_S3_BUCKET_NAME is not defined in environment variables');
    }

    const imageUploadPromises = (req.files as Express.Multer.File[]).map((file) => {
      const params = {
        Bucket: bucketName,
        Key: `${uuidv4()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      return s3.upload(params).promise();
    });

    const uploadResults = await Promise.all(imageUploadPromises);
    const imageUrls = uploadResults.map((result) => result.Location);

    // Crear el producto con las URLs de las imágenes
    await createOneProductService({
      title,
      description,
      images: imageUrls, // Guardar las URLs en lugar de los datos de la imagen
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
