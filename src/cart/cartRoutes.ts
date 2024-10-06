import { authTokenValidationAndIsAdmin } from '../auth/middlewares/authTokenValidationAndIsAdmin';
import { Router } from 'express';
import { createCartController } from './controllers/createCartController';
import { deleteCart } from './controllers/deleteCartController';
import { getCarts } from './controllers/getAllCartsController';
import { getCartById } from './controllers/getCartByIdController';
import { updateCart } from './controllers/updateCartController';
import { updateCartStatusController } from './controllers';
import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';

const cartRouter: Router = Router();

cartRouter.route('/api/carts').post(createCartController).get(authTokenValidationAndIsAdmin, getCarts);
cartRouter
  .route('/api/carts/find/:id')
  .put(authUserTokenValidation, updateCart)
  .get(authUserTokenValidation, getCartById)
  .delete(authUserTokenValidation, deleteCart);

cartRouter.route('/api/cart/:id/:status').get(updateCartStatusController);

export default cartRouter;
