import { Request,Response,NextFunction } from "express";
import { catchAsyncError } from "../middlewares/catchAsyncError";
import ErrorHandler from "../utills/errorHandlers";
import cloudinary from 'cloudinary';
import courseModel, { iCourse } from "../models/course";
import { createCourse } from "../services/courseServices";
import redis from "../utills/redis";
import { jwtPayloadNew } from "../middlewares/auth";

export const uploadCourse = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const data = req.body;
        
        const thumbnail = data.thumbnail;
        
        if(thumbnail){
            const myCloud = await cloudinary.v2.uploader.upload(thumbnail,{
                folder: 'courses'
            })
            data.thumbnail = {
                public_id : myCloud.public_id,
                url : myCloud.secure_url
            }
        }
        createCourse(data,res,next);
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})

export const editCourse = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const data = req.body;
        const thumbnail = data.thumbnail;
        if(thumbnail){
            await cloudinary.v2.uploader.destroy(thumbnail.public_id)
            const myCloud = await cloudinary.v2.uploader.upload(thumbnail,{
                folder: 'courses'
            })
            data.thumbnail = {
                public_id : myCloud.public_id,
                url : myCloud.secure_url
            }
        }
        const courseId = req.params.id;
        const course = await courseModel.findByIdAndUpdate(courseId,{$set:data},{new:true}); 
        if(!course){
            return next(new ErrorHandler('Failed to update course',400))
        }
        res.status(201).json({
            success:true,
            course
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})

export const getSingleCourse = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const course = await redis?.get(req.params.id);

        if(course){
            return res.status(201).json({
                success : true,
                course : JSON.parse(course)
            })
        }else{

            const courseMongo =  await courseModel.findById(req.params.id).select("-courseData.videoUrl -courseData.link -courseData.questions -courseData.suggestion -courseData.videoLength -courseData.videoPlayer ");
            if(!courseMongo){
                return next(new ErrorHandler('Failed to fetch single course',400));
            }
            await redis?.set(req.params.id,JSON.stringify(courseMongo));
            return res.status(201).json({
                success : true,
                courseMongo
            })
        }
        
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})

export const getAllCourses = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const courses = await redis?.get('courses');
       if(courses){
            return res.status(201).json({
                success : true,
                Allcourses : JSON.parse(courses)
            })
       }
       else{
            const coursesMongo = await courseModel.find({}).select("-courseData.videoUrl -courseData.link -courseData.questions -courseData.suggestion -courseData.videoLength -courseData.videoPlayer ");
            if(!courses){
                return next(new ErrorHandler('Failed to fetch all course',400));
            }
            await redis?.set('courses',JSON.stringify(courses));
            return res.status(201).json({
                success : true,
                Allcourses : coursesMongo
            })
       } 
        
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})

export const getCourseByUser = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userCourses = (req as jwtPayloadNew).user.courses;

        const courseId = req.params.id;
        const isCourseExist = userCourses.find((a : any) => a.courseId.toString() === courseId.toString());

        console.log("(req as jwtPayloadNew).user",(req as jwtPayloadNew).user);
        console.log("userCourse",userCourses);
        if(!isCourseExist){
            return next(new ErrorHandler(`You haven't bought this Course !`,400));
        }
        const course = await courseModel.findById(courseId);
        if(!course){
            return next(new ErrorHandler(`Unable to fetch this course by ID !`,400));
        }
        const content =  course.courseData;
        res.status(200).json({
            success : true,
            content
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})


//create questions and answer
