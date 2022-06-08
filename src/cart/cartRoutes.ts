import { authTokenValidationAndIsAdmin } from "../auth/middlewares/authTokenValidationAndIsAdmin";
import { Router } from "express";
import { createCartController } from "./controllers/createCartController";
import { deleteCart } from "./controllers/deleteCartController";
import { getCarts } from "./controllers/getAllCartsController";
import { getCartById } from "./controllers/getCartByIdController";
import { updateCart } from "./controllers/updateCartController";
import { authTokenValidation } from "../auth/middlewares/authTokenValidation";

const cartRouter: Router = Router();

cartRouter
    .route('/api/carts')
    .post(createCartController)
    .get(authTokenValidationAndIsAdmin, getCarts)
cartRouter
    .route('/api/carts/find/:id')
    .put(authTokenValidation, updateCart)
    .get(authTokenValidation, getCartById)
    .delete(authTokenValidation, deleteCart)
export default cartRouter;