import express from 'express'
import { addAnswer, addQuestion, addReview, deleteCourseById, editCourse, getAllCourse, getAllCourses, getCourseByUser, getSingleCourse, reviewReply, uploadCourse } from '../controllers/courseController';
import { isAuthenticated, validateUserRole } from '../middlewares/auth';

export const courseRouter = express.Router();

courseRouter.post('/createcourse',isAuthenticated,validateUserRole('admin'),uploadCourse);
courseRouter.post('/updatecourse/:id',isAuthenticated,validateUserRole('admin'),editCourse);
courseRouter.post('/get-single-course/:id',isAuthenticated,getSingleCourse);
courseRouter.post('/getallcourses',getAllCourses);
courseRouter.post('/get-course-content/:id',isAuthenticated,getCourseByUser);
courseRouter.post('/addquestion',isAuthenticated,addQuestion);
courseRouter.post('/addanswer',isAuthenticated,addAnswer);
courseRouter.post('/addreview/:id',isAuthenticated,addReview);
courseRouter.post('/addreviewreply',isAuthenticated,validateUserRole('admin'),reviewReply);
courseRouter.post('/getallcourse',isAuthenticated,validateUserRole('admin'),getAllCourse);
courseRouter.post('/deletecoursebyid/:courseId',isAuthenticated,validateUserRole('admin'),deleteCourseById);


