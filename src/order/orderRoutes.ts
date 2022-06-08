import { authTokenValidationAndIsAdmin } from "../auth/middlewares/authTokenValidationAndIsAdmin";
import { Router } from "express";
import { createOrderController } from "./controllers/createOrderController";
import { deleteOrder } from "./controllers/deleteOrderByIdController";
import { getOrders } from "./controllers/getAllOrdersController";
import { getMonthlyIncomeOrders } from "./controllers/getMonthlyIncomeOrdersController";
import { getOrderById } from "./controllers/getOrderByIdController";
import { updateOrder } from "./controllers/updateOrderController";
import { authTokenValidation } from "../auth/middlewares/authTokenValidation";

const orderRouter: Router = Router();

orderRouter
    .route('/api/orders')
    .post(authTokenValidation, createOrderController)
    .get(authTokenValidationAndIsAdmin, getOrders);

orderRouter
    .route('/api/orders/find/:id')
    .put(authTokenValidationAndIsAdmin, updateOrder)
    .get(authTokenValidation, getOrderById)
    .delete(authTokenValidationAndIsAdmin, deleteOrder);
orderRouter
    .route('/api/orders/income')
    .get(authTokenValidationAndIsAdmin, getMonthlyIncomeOrders);
    
export default orderRouter;