
import { Router } from "express";
import { createProduct } from "./controllers/createProductController";
import { deleteProduct } from "./controllers/deleteProductByIdController";
import { getAllProducts } from "./controllers/getAllProductsController";
import { getProductsById } from "./controllers/getProductByIdController";
import { updateProduct } from "./controllers/updateProductController";
import { authTokenValidationAndIsAdmin } from "../auth/middlewares/authTokenValidationAndIsAdmin";
import { authTokenValidation } from "../auth/middlewares/authTokenValidation";



const productRouter: Router = Router();

productRouter
    .route('/api/products')
    .post(authTokenValidationAndIsAdmin, createProduct)
    .get(authTokenValidation, getAllProducts)
productRouter
    .route('/api/products/find/:id')
    .get(authTokenValidation, getProductsById)
    .delete(authTokenValidationAndIsAdmin, deleteProduct)
    .put(authTokenValidationAndIsAdmin, updateProduct)
       
export default productRouter;