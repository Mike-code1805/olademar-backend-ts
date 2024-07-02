import { Router } from 'express';

import { authUserTokenValidation } from '../auth/middlewares/authUserTokenValidation';
import { getOneUserController } from './controllers';

const userRouter: Router = Router();

userRouter.route('/api/user').get(authUserTokenValidation, getOneUserController);

// userRouter.route('/api/users').get(authTokenValidationAndIsAdmin, getUsers);

// userRouter.route('/api/users/stats').get(authTokenValidationAndIsAdmin, getStatsUsers);

// userRouter.route('/api/users/find/:id').get(authTokenValidationAndIsAdmin, getUsersById).delete(authTokenValidationAndIsAdmin, deleteUser).put(authTokenValidationAndIsAdmin, updateUser);

export default userRouter;
