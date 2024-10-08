import { Router } from 'express';
import { bodyRequestValidator } from '../shared/validators/bodyRequestValidators';

import {
  authSignupUserController,
  authSignupUserGoogleController,
  authLoginUserController,
  authAdminLoginUserController,
} from './controllers';
import { recoveryPasswordController } from './controllers/recoveryPasswordController';
import { refreshToken } from './controllers/refreshTokenController';
import { updatePasswordController } from './controllers/updatePasswordController';
import { signUpUserSchema, singInUserSchema, signUpUserGoogleSchema } from './middlewares/authRequestValidation';
import { refreshTokenValidation } from './middlewares/refreshTokenValidation';
import { userTokenValidationParams } from './middlewares/userTokenValidationParams';
import { validateUserController } from './controllers/validateUserController';

const authRouter: Router = Router();

authRouter.route('/api/auth/login').post(bodyRequestValidator(singInUserSchema), authLoginUserController);
authRouter.route('/api/auth/admin/login').post(bodyRequestValidator(singInUserSchema), authAdminLoginUserController);

authRouter.route('/api/auth/register').post(bodyRequestValidator(signUpUserSchema), authSignupUserController);
authRouter
  .route('/api/auth/register/google')
  .post(bodyRequestValidator(signUpUserGoogleSchema), authSignupUserGoogleController);

authRouter.route('/api/auth/refreshtoken').post(refreshTokenValidation, refreshToken);

authRouter.route('/api/auth/validate/:id/:token').get(userTokenValidationParams, validateUserController);

authRouter.route('/api/auth/recovery').post(recoveryPasswordController);

authRouter.route('/api/auth/recovery/:id/:token').post(userTokenValidationParams, updatePasswordController);

export default authRouter;
