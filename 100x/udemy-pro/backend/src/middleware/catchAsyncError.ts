import { Request, Response,NextFunction } from "express";

export const catchAsyncError = 
(theFunc : any) => async(req:Request,res:Response,next:NextFunction) => {
    Promise.resolve(theFunc(req,res,next)).catch(next);
};