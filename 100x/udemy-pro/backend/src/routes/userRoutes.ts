import express from 'express';
import {activateUser, loginUser, registrationUser} from '../controller/userController';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/verify',activateUser);
userRouter.post('/login',loginUser);

export default userRouter;