import { Router } from 'express';
import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';
import { createOneCommentController, getOneCommentByUserProductController, updateOneCommentController } from './controllers';

const productRouter: Router = Router();

productRouter.route('/api/comment').post(authUserTokenValidation, createOneCommentController);
productRouter.route('/api/comment/:id').get(authUserTokenValidation, getOneCommentByUserProductController).put(authUserTokenValidation, updateOneCommentController);

export default productRouter;
