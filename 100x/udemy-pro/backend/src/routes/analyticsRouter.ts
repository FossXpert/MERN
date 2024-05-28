import express from 'express';
import { isAuthenticated, validateUserRole } from '../middlewares/auth';
import { getCoursesAnalytics, getOrdersAnalytics, getUserAnalytics } from '../controllers/analyticsController';
const analyticsRouter = express.Router();

analyticsRouter.get('/get-user-analytics',isAuthenticated,validateUserRole('admin'),getUserAnalytics);
analyticsRouter.get('/get-order-analytics',isAuthenticated,validateUserRole('admin'),getOrdersAnalytics);
analyticsRouter.get('/get-course-analytics',isAuthenticated,validateUserRole('admin'),getCoursesAnalytics);

export default analyticsRouter;