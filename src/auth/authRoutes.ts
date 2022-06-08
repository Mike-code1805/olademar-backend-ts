import { Router } from "express";
import { bodyRequestValidator } from "../shared/validators/bodyRequestValidators";

import { authLogin } from "./controllers/authLoginController";
import { authSignup } from "./controllers/authSignupController";
import { refreshToken } from "./controllers/refreshTokenController";

import { signUpUserSchema, singInUserSchema } from "./middlewares/authRequestValidation";
import { refreshTokenValidation } from "./middlewares/refreshTokenValidation";

const authRouter: Router = Router();

authRouter
    .route('/api/auth/login')
    .post(bodyRequestValidator(singInUserSchema), authLogin)

authRouter
    .route('/api/auth/register')
    .post(bodyRequestValidator(signUpUserSchema), authSignup)

authRouter
    .route('/api/auth/refreshtoken').post(refreshTokenValidation, refreshToken);

export default authRouter;