import express from 'express';
import {registrationUser} from '../controller/userController';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);

export default userRouter;