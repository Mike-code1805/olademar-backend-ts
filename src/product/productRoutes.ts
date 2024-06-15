import { Router } from 'express';
import { createProduct } from './controllers/createProductController';
import { deleteProduct } from './controllers/deleteProductByIdController';
import { getAllProducts } from './controllers/getAllProductsController';
import { getProductsById } from './controllers/getProductByIdController';
import { updateProduct } from './controllers/updateProductController';
import { authTokenValidationAndIsAdmin } from '../auth/middlewares/authTokenValidationAndIsAdmin';
import { authTokenValidation } from '../auth/middlewares/authTokenValidation';
import { getImageByIdController } from './controllers/getImageByIdController';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const productRouter: Router = Router();

productRouter.route('/api/products').post(upload.single('image'), createProduct).get(getAllProducts);
productRouter.route('/api/products/:id').get(getProductsById).delete(authTokenValidationAndIsAdmin, deleteProduct).put(authTokenValidationAndIsAdmin, updateProduct);
productRouter.route('/api/products/image/:id').get(getImageByIdController);

export default productRouter;
