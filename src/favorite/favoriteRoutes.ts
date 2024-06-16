import { Router } from 'express';

import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';

import { createOneFavoriteController } from './controllers/createOneFavoriteController';
import { getAllFavoritesController } from './controllers/getAllFavoritesController';

const productRouter: Router = Router();

productRouter.route('/api/favorite').get(authUserTokenValidation, getAllFavoritesController);
productRouter.route('/api/favorite/:id').post(authUserTokenValidation, createOneFavoriteController);

export default productRouter;
