import { Router } from "express";

import { getStatsUsers } from "./controllers/getStatsUsersController";

import { deleteUser } from "./controllers/deleteUserController";
import { getUsers } from "./controllers/getAllUsersController";
import { getUsersById } from "./controllers/getUserByIdController";
import { updateUser } from "./controllers/updateUserController";
import { authTokenValidationAndIsAdmin } from "../auth/middlewares/authTokenValidationAndIsAdmin";



const userRouter: Router = Router();

userRouter
    .route('/api/users')
    .get(authTokenValidationAndIsAdmin, getUsers)

userRouter
    .route('/api/users/stats')
    .get(authTokenValidationAndIsAdmin, getStatsUsers)
       
userRouter
.route('/api/users/find/:id')
    .get(authTokenValidationAndIsAdmin, getUsersById)
    .delete(authTokenValidationAndIsAdmin, deleteUser)
    .put(authTokenValidationAndIsAdmin, updateUser)
    
export default userRouter;