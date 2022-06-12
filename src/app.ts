import authRouter from "./auth/authRoutes";
import express, { Application, NextFunction, Request, Response }  from "express";
import userRouter from "./user/userRoutes";
import productRouter from "./product/productRoutes";
import cartRouter from "./cart/cartRoutes";
import orderRouter from "./order/orderRoutes";
import swaggerUI from "swagger-ui-express";
import { swaggerSpecs } from "./config/swaggerConfig";


const app: Application = express();

app.use(express.json());

app.use(userRouter);
app.use(authRouter);
app.use(productRouter);
app.use(cartRouter)
app.use(orderRouter)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs))

app.use(function(err:any, req:Request, res:Response, next:NextFunction) {
    res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;