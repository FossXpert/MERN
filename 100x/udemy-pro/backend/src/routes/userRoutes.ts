import express from 'express';
import {registrationUser} from '../controller/userController';
import { userRegistration } from '../controller/userController-copy';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/registration-copy',userRegistration);

export default userRouter;