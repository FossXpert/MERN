import express from 'express';
import {activateUser, deleteUserById, getAllUser, getUserInfo, loginUser, logoutUser, registrationUser,
    socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo,
    updateUserRole} from '../controllers/userController';
import { isAuthenticated, validateUserRole } from '../middlewares/auth';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/verify',activateUser);
userRouter.post('/login',loginUser);
userRouter.get('/logout',isAuthenticated,logoutUser);
userRouter.get('/refreshtoken',updateAccessToken);
userRouter.get('/me',isAuthenticated,getUserInfo);
userRouter.post('/socialAuth',socialAuth);
userRouter.put('/updateuser',isAuthenticated,updateUserInfo);
userRouter.post('/updatepassword',isAuthenticated,updatePassword);
userRouter.put('/updateprofilepic',isAuthenticated,updateProfilePicture);
userRouter.post('/getalluser',isAuthenticated,validateUserRole('admin'),getAllUser);
userRouter.post('/changerole',isAuthenticated,validateUserRole('admin'),updateUserRole);
userRouter.post('/deleteuser/:userId',isAuthenticated,validateUserRole('admin'),deleteUserById);



export default userRouter;