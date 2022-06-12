import { Router } from "express";
import { bodyRequestValidator } from "../shared/validators/bodyRequestValidators";

import { authLogin } from "./controllers/authLoginController";
import { authSignup } from "./controllers/authSignupController";
import { recoveryPasswordController } from "./controllers/recoveryPasswordController";
import { refreshToken } from "./controllers/refreshTokenController";
import { validateUserController } from "./controllers/validateUserController";
import { updatePasswordController } from "./controllers/updatePasswordController" ;
import { signUpUserSchema, singInUserSchema } from "./middlewares/authRequestValidation";
import { refreshTokenValidation } from "./middlewares/refreshTokenValidation";
import { userTokenValidationParams } from "./middlewares/userTokenValidationParams";

const authRouter: Router = Router();

authRouter
    .route('/api/auth/login')
    .post(bodyRequestValidator(singInUserSchema), authLogin)

authRouter
    .route('/api/auth/register')
    .post(bodyRequestValidator(signUpUserSchema), authSignup)

authRouter
    .route('/api/auth/refreshtoken')
    .post(refreshTokenValidation, refreshToken);

authRouter
    .route('/api/auth/validate/:id/:token')
    .get(userTokenValidationParams, validateUserController);

authRouter.route('/api/auth/recovery')
    .post(recoveryPasswordController);

authRouter.route('/api/auth/recovery/:id/:token')
    .post(userTokenValidationParams, updatePasswordController);

export default authRouter;