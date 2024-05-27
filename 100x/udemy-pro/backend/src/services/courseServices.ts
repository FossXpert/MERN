import {Request,Response,NextFunction} from 'express';
import { catchAsyncError, success } from '../middlewares/catchAsyncError';
import ErrorHandler from '../utills/errorHandlers';
import courseModel, { iCourse } from '../models/course';


export const createCourse = catchAsyncError(async(data:iCourse,res:Response,next:NextFunction)=>{
    try {
         const course = await courseModel.create(data);
         res.status(201).json({
            success: await success(res.statusCode),
            course
         });
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})
export const getAllCoursesService = async(res:Response,next:NextFunction)=>{
    try {
        const allCourses = await courseModel.find().sort({createdAt:-1});
        res.status(200).json({
            allCourses
        })
    } catch (error:any) {
        throw error
    }
}