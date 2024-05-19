import express from 'express';
import {activateUser, loginUser, logoutUser, registrationUser} from '../controller/userController';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/verify',activateUser);
userRouter.post('/login',loginUser);
userRouter.post('/logout',logoutUser);

export default userRouter;