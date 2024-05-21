import express from 'express';
import {activateUser, getUserInfo, loginUser, logoutUser, registrationUser,
    socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo} from '../controllers/userController';
import { isAuthenticated } from '../middlewares/auth';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/verify',activateUser);
userRouter.post('/login',loginUser);
userRouter.post('/logout',isAuthenticated,logoutUser);
userRouter.post('/refreshtoken',updateAccessToken);
userRouter.post('/me',isAuthenticated,getUserInfo);
userRouter.post('/socialAuth',socialAuth);
userRouter.post('/updateuser',isAuthenticated,updateUserInfo);
userRouter.post('/updatepassword',isAuthenticated,updatePassword);
userRouter.post('/updateprofilepic',isAuthenticated,updateProfilePicture);

export default userRouter;