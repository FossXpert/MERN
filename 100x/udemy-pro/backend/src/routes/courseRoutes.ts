import express from 'express'
import { uploadCourse } from '../controllers/courseController';
import { isAuthenticated, validateUserRole } from '../middlewares/auth';

export const courseRouter = express.Router();

courseRouter.post('/create',isAuthenticated,validateUserRole('admin'),uploadCourse);
