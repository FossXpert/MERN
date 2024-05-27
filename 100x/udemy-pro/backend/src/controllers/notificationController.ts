import { catchAsyncError } from "../middlewares/catchAsyncError";
import { Request,Response,NextFunction } from "express";
import ErrorHandler from "../utills/errorHandlers";
import notificationModel from "../models/notification";


export const getNotifications = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const notification = await notificationModel.find().sort({createdAt : -1});
        res.status(200).json({
            success:true,
            notification
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})