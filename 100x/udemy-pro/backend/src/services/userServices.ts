
//get user by id

import { NextFunction, Response } from "express";
import { success } from "../middlewares/catchAsyncError";
import ErrorHandler from "../utills/errorHandlers";
import redis from "../utills/redis";

export const getUserById = async(id: string,res:Response,next: NextFunction) => {
    try {
        const user = await redis?.get(id);
        if(!user){
            return next(new ErrorHandler('Failed to retrieve user by ID',400)); 
        }
        const JsonUser = JSON.parse(user);
        return res.status(200).json({
            success : await success(res.statusCode),JsonUser,
        })

    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
}
