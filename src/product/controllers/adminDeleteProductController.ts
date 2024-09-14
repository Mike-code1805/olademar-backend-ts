import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { deleteOneProductService, getOneProductByIdService } from '../services';
import { S3 } from 'aws-sdk';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const adminDeleteProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const product = await getOneProductByIdService(id);
    if (!product) throw new Error('Product not found');

    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    if (!bucketName) throw new Error('AWS_S3_BUCKET_NAME is not defined in environment variables');

    // Eliminar todas las imágenes del producto de S3
    const imageDeletePromises = product.images.map((url: string) => {
      const key = url.split('/').pop(); // Extraer el nombre del archivo de la URL
      return s3
        .deleteObject({
          Bucket: bucketName,
          Key: key!,
        })
        .promise();
    });

    await Promise.all(imageDeletePromises);

    // Eliminar el producto de la base de datos
    await deleteOneProductService(id);

    res.status(200).json('Deleted');
  } catch (error: any) {
    logger.error('Error deleting product', { message: error.message });
    next(new ApplicationError(400, error.message));
  }
};
