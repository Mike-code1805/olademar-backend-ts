import { Router } from 'express';

import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';
import { createPreferenceController } from './controllers';

const paymentRouter: Router = Router();

paymentRouter.route('/api/payment').post(authUserTokenValidation, createPreferenceController);

export default paymentRouter;
