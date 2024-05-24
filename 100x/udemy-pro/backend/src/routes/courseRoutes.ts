import express from 'express'
import { addAnswer, addQuestion, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from '../controllers/courseController';
import { isAuthenticated, validateUserRole } from '../middlewares/auth';

export const courseRouter = express.Router();

courseRouter.post('/createcourse',isAuthenticated,validateUserRole('admin'),uploadCourse);
courseRouter.post('/updatecourse/:id',isAuthenticated,validateUserRole('admin'),editCourse);
courseRouter.post('/get-single-course/:id',isAuthenticated,getSingleCourse);
courseRouter.post('/getallcourses',getAllCourses);
courseRouter.post('/get-course-content/:id',isAuthenticated,getCourseByUser);
courseRouter.post('/addquestion',isAuthenticated,addQuestion);
courseRouter.post('/addanswer',isAuthenticated,addAnswer);