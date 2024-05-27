import express from 'express';
import { isAuthenticated, validateUserRole } from '../middlewares/auth';
import { getNotifications, updateNotification } from '../controllers/notificationController';

const notificationRouter = express.Router();
notificationRouter.post('/getnotification',isAuthenticated,validateUserRole('admin'),getNotifications);
notificationRouter.post('/updatenotification',isAuthenticated,validateUserRole('admin'),updateNotification);
export default notificationRouter;