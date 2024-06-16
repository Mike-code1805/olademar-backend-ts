import { Router } from 'express';
import { createProduct } from './controllers/createProductController';
import { deleteProduct } from './controllers/deleteProductByIdController';
import { getAllProducts } from './controllers/getAllProductsController';
import { getProductsById } from './controllers/getProductByIdController';
import { updateProduct } from './controllers/updateProductController';
import { authTokenValidationAndIsAdmin } from '../auth/middlewares/authTokenValidationAndIsAdmin';
import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';
import { getImageByIdController } from './controllers/getImageByIdController';
import multer from 'multer';
import { getAllProductsWithFavoriteController } from './controllers/getAllProductsWithFavoriteController';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const productRouter: Router = Router();

productRouter.route('/api/products').post(upload.single('image'), createProduct).get(getAllProducts);
productRouter.route('/api/productswithfavorite').get(authUserTokenValidation, getAllProductsWithFavoriteController);
productRouter.route('/api/products/:id').get(getProductsById).delete(authTokenValidationAndIsAdmin, deleteProduct).put(authTokenValidationAndIsAdmin, updateProduct);
productRouter.route('/api/products/image/:id').get(getImageByIdController);

export default productRouter;
