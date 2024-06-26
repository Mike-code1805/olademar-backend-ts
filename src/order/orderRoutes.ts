import { authTokenValidationAndIsAdmin } from '../auth/middlewares/authTokenValidationAndIsAdmin';
import { Router } from 'express';
import { deleteOrder } from './controllers/deleteOrderByIdController';
import { getOrders } from './controllers/getAllOrdersController';
import { getMonthlyIncomeOrders } from './controllers/getMonthlyIncomeOrdersController';
import { getOrderById } from './controllers/getOrderByIdController';
import { updateOrder } from './controllers/updateOrderController';
import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';
import { createOneOrderController, getAllOrdersByUserIdController, getCounterOrdersByUserIdController } from './controllers';

const orderRouter: Router = Router();

orderRouter.route('/api/order').post(authUserTokenValidation, createOneOrderController).get(authUserTokenValidation, getAllOrdersByUserIdController);
orderRouter.route('/api/order/counter').get(authUserTokenValidation, getCounterOrdersByUserIdController);

orderRouter.route('/api/orders/find/:id').put(authTokenValidationAndIsAdmin, updateOrder).get(authUserTokenValidation, getOrderById).delete(authTokenValidationAndIsAdmin, deleteOrder);
orderRouter.route('/api/orders/income').get(authTokenValidationAndIsAdmin, getMonthlyIncomeOrders);

export default orderRouter;
