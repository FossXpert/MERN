import {Request,Response,NextFunction} from 'express';
import { catchAsyncError, success } from '../middlewares/catchAsyncError';
import ErrorHandler from '../utills/errorHandlers';
import courseModel, { iCourse } from '../models/course';
import { jwtPayloadNew } from '../middlewares/auth';
import { userModel } from '../models/user';
import categoryModel, { iCategory } from '../models/category';


export const createCourse = async(data:iCourse,req:Request,res:Response,next:NextFunction)=>{
    try {
        const course = await courseModel.create(data);
        const categoryName : string = "AI";
        const cat = await categoryModel.findOne({categoryName:categoryName});
        const user = (req as jwtPayloadNew).user;
        const userId = user._id;
        const userData = await userModel.findById(userId);
        if(userData){
            userData.postedCourse?.push(course._id);
            await userData.save();
        }
        course.postedBy = {
            userId : userData?._id,
            name : userData?.name as string,
            email: userData?.email as string
        }
        if(cat){
            console.log(cat);
            course.courseCategory = cat._id;
            cat.containedCourses?.push(course._id);
            await cat.save();
            console.log("Here")
        }else{
            return next(new ErrorHandler('Cat Is Undefined',400));
        }
        await course.save();
         res.status(201).json({
            success: await success(res.statusCode),
            course
         });
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
};
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