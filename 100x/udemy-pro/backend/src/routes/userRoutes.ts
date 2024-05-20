import express from 'express';
import {activateUser, loginUser, logoutUser, registrationUser, updateAccessToken} from '../controller/userController';
import { isAuthenticated } from '../middleware/auth';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/verify',activateUser);
userRouter.post('/login',loginUser);
userRouter.post('/logout',isAuthenticated,logoutUser);
userRouter.post('/refreshtoken',updateAccessToken);

export default userRouter;