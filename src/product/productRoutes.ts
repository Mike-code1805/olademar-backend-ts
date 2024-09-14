import { Router } from 'express';
import { createProduct } from './controllers/createProductController';
import { deleteProduct } from './controllers/deleteProductByIdController';
import { getAllProducts } from './controllers/getAllProductsController';
import { updateProduct } from './controllers/updateProductController';
import { authTokenValidationAndIsAdmin } from '../auth/middlewares/authTokenValidationAndIsAdmin';
import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';
import { getImageByIdController } from './controllers/getImageByIdController';
import multer from 'multer';
import { getAllProductsWithFavoriteController } from './controllers/getAllProductsWithFavoriteController';
import {
  getOneProductByIdController,
  getOneProductByIdWithFavoriteLikeController,
  getProductsByCategoryController,
  getProductsByCategoryWithFavoriteController,
  getImageByIdToShareController,
  getImageDataByIdController,
  adminGetAllProductsController,
  adminUpdateProductController,
  adminDeleteProductController,
  adminGetOneProductByIdController,
} from './controllers';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const productRouter: Router = Router();

productRouter
  .route('/api/admin/products')
  .post(authTokenValidationAndIsAdmin, upload.array('images', 10), createProduct)
  .get(authTokenValidationAndIsAdmin, adminGetAllProductsController);
productRouter
  .route('/api/admin/products/:id')
  .put(authTokenValidationAndIsAdmin, upload.array('images', 10), adminUpdateProductController)
  .delete(authTokenValidationAndIsAdmin, adminDeleteProductController)
  .get(authTokenValidationAndIsAdmin, adminGetOneProductByIdController);

productRouter.route('/api/products').get(getAllProducts);
productRouter.route('/api/productswithfavorite').get(authUserTokenValidation, getAllProductsWithFavoriteController);
productRouter
  .route('/api/products/:id')
  .get(getOneProductByIdController)
  .delete(authTokenValidationAndIsAdmin, deleteProduct);

productRouter
  .route('/api/productswithfavoritelike/:id')
  .get(authUserTokenValidation, getOneProductByIdWithFavoriteLikeController);
productRouter.route('/api/products/image/:id').get(getImageByIdController);
productRouter.route('/api/products/imagedata/:id').get(getImageDataByIdController);
productRouter.route('/api/products/imageshare/:id').get(getImageByIdToShareController);
productRouter.route('/api/products/category/:id').get(getProductsByCategoryController);
productRouter
  .route('/api/productswithfavorite/category/:id')
  .get(authUserTokenValidation, getProductsByCategoryWithFavoriteController);

export default productRouter;
