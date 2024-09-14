import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { updateProductService, getOneProductByIdService } from '../services';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const adminUpdateProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params; // El ID del producto que deseas editar
    const { title, description, categories, dimensions, price, shortdescription, ofert, oldImageUrls } = req.body;

    const product = await getOneProductByIdService(id);
    if (!product) throw new Error('Product not found');

    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    if (!bucketName) throw new Error('AWS_S3_BUCKET_NAME is not defined in environment variables');

    let newImageUrls: string[] = [];
    console.log(req.files);
    console.log(oldImageUrls);
    // Si se proporcionan nuevas imágenes, súbelas a S3
    if (Array.isArray(req.files) && req.files.length > 0) {
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
      newImageUrls = uploadResults.map((result) => result.Location);
    }

    // Si hay URLs de imágenes antiguas que el usuario quiere eliminar, elimínalas de S3 y actualiza la base de datos
    let updatedImageUrls = product.images; // Mantén las imágenes actuales

    if (oldImageUrls !== undefined && JSON.parse(oldImageUrls).length > 0) {
      const olImageUrlsJson = JSON.parse(oldImageUrls);

      const imageDeletePromises = olImageUrlsJson.map((url: string) => {
        const key = url.split('/').pop(); // Extraer el nombre del archivo de la URL
        return s3
          .deleteObject({
            Bucket: bucketName,
            Key: decodeURIComponent(key!),
          })
          .promise();
      });
      updatedImageUrls = product.images.filter((url: string) => !olImageUrlsJson.includes(url));

      console.log('updatedImageUrls');
      console.log(updatedImageUrls);
      await Promise.all(imageDeletePromises);
    }

    // Combina las nuevas imágenes con las que no fueron eliminadas
    updatedImageUrls = [...updatedImageUrls, ...newImageUrls];
    console.log('updatedImageUrls');
    console.log(updatedImageUrls);
    const updatedProduct: any = {
      title,
      description,
      images: updatedImageUrls, // Actualizar con las imágenes correctas
      dimensions,
      price,
      shortdescription,
    };

    if (categories !== undefined) {
      updatedProduct.categories = JSON.parse(categories);
    }

    // Si ofert es 0 o '0', establece una actualización explícita para removerla
    if (ofert === '0' || ofert === 0 || ofert === 'Sin oferta') {
      updatedProduct.$unset = { ofert: '' }; // Usar $unset para eliminar la propiedad
    } else {
      updatedProduct.ofert = ofert;
    }

    // Actualiza el producto con las nuevas URLs de imágenes (si hay) y gestiona la propiedad ofert
    await updateProductService(id, updatedProduct);

    res.status(200).json('Updated');
  } catch (error: any) {
    logger.error('Error updating product', { message: error.message });
    next(new ApplicationError(400, error.message));
  }
};
