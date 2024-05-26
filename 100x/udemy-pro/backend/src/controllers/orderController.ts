import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../middlewares/catchAsyncError";
import ErrorHandler from "../utills/errorHandlers";
import { iOrder } from "../models/order";
import { jwtPayloadNew } from "../middlewares/auth";
import { userModel } from "../models/user";
import courseModel from "../models/course";


export const createOrder = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {courseId,payment_info} = req.body as iOrder;
        
        const user = await userModel.findById((req as jwtPayloadNew).user._id);
        if(!user){
            return next(new ErrorHandler(`errror in getting user`,400));
        }
        //checking if user already purchased this course or not
        const isCourseExist = await user.courses.find(a => a.courseId === courseId );
        if(isCourseExist){
            return next(new ErrorHandler('You have already bought this course',400));
        }
        const course = await courseModel.findById(courseId);
        if(!course){
            return next(new ErrorHandler(`Failed to fetch course`,400));
        }
        const data :any =  {
            courseId  : course._id,
            userId : user._id

            
        }
        user.courses.push({courseId});
        await user.save();
        res.status(200).json({
            user
        })

    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})