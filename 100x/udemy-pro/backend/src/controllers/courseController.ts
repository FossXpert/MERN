import { Request,Response,NextFunction } from "express";
import { catchAsyncError } from "../middlewares/catchAsyncError";
import ErrorHandler from "../utills/errorHandlers";
import cloudinary from 'cloudinary';
import { iCourse } from "../models/course";
import { createCourse } from "../services/courseServices";

export const uploadCourse = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const data = req.body ;
        const thumbnail = data.thumbnail;
        if(!thumbnail){
            return next(new ErrorHandler('Thumbnail is undefined',400));
        }
        const myCloud = await cloudinary.v2.uploader.upload(thumbnail,{
            folder: 'courses'
        })
        data.thumbnail = {
            public_id : myCloud.public_id,
            url : myCloud.secure_url
        }
        createCourse(data,res,next);
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})
