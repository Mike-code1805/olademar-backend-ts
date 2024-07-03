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
import { getOneProductByIdController, getOneProductByIdWithFavoriteLikeController, getProductsByCategoryController, getProductsByCategoryWithFavoriteController } from './controllers';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const productRouter: Router = Router();

productRouter.route('/api/products').post(upload.array('images', 10), createProduct).get(getAllProducts);
productRouter.route('/api/productswithfavorite').get(authUserTokenValidation, getAllProductsWithFavoriteController);
productRouter.route('/api/products/:id').get(getOneProductByIdController).delete(authTokenValidationAndIsAdmin, deleteProduct).put(authTokenValidationAndIsAdmin, updateProduct);
productRouter.route('/api/productswithfavoritelike/:id').get(authUserTokenValidation, getOneProductByIdWithFavoriteLikeController);
productRouter.route('/api/products/image/:id').get(getImageByIdController);
productRouter.route('/api/products/category/:id').get(getProductsByCategoryController);
productRouter.route('/api/productswithfavorite/category/:id').get(authUserTokenValidation, getProductsByCategoryWithFavoriteController);

export default productRouter;
