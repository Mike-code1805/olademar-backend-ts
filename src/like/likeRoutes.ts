import { Router } from 'express';

import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';

import { createOneLikeController } from './controllers/createOneLikeController';
// import { getAllLikesController } from './controllers/getAllLikesController';

const productRouter: Router = Router();

// productRouter.route('/api/like').get(authUserTokenValidation, getAllLikesController);
productRouter.route('/api/like/:id').post(authUserTokenValidation, createOneLikeController);

export default productRouter;
