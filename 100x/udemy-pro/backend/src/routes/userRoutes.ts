import express from 'express';
import {activateUser, loginUser, logoutUser, registrationUser, updateAccessToken} from '../controllers/userController';
import { isAuthenticated } from '../middlewares/auth';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/verify',activateUser);
userRouter.post('/login',loginUser);
userRouter.post('/logout',isAuthenticated,logoutUser);
userRouter.post('/refreshtoken',updateAccessToken);

export default userRouter;