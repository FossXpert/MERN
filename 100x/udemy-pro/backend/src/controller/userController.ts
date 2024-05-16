require('dotenv').config();
import ErrorHandler from "../utills/errorHandlers";
import { catchAsyncError } from "../middleware/catchAsyncError";
import { Request, Response,NextFunction } from "express";
import { userModel} from "../models/user";
import jwt, { Secret } from 'jsonwebtoken';
import ejs from 'ejs';
import path from 'path';
import sendMail from "../utills/sendMail";

interface iRegistrationBody{
    name : string;
    email : string;
    password : string;
    avatar?:string;
}


export const registrationUser = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {name,email,password}:iRegistrationBody = req.body;
        console.log(email)
        const isEmailExist = await userModel.findOne({email});
        if(isEmailExist){
            return next(new ErrorHandler('Email already exists',400));
        }
        const user : iRegistrationBody = {
            name,
            email,
            password,
        }

        const activationToken  = await userTokenActivation(user);
        const activationCode = activationToken.activationToken;

        const data = {
            user : {
                name:user.name,
            },
            activationCode
        }
        const html = await ejs.renderFile(path.join(__dirname,'../mail/activationEmail.ejs'),data);

        try {
            await sendMail({
                email:user.email,
                subject:'Account activation',
                template:'activationEmail.ejs',
                data
            })
            res.status(201).json({
                success:true,
                message:'Account activation email has been sent to your email address',
                activationToken: activationToken.token,
            })
        } catch (error:any) {
            return next(new ErrorHandler(error.message, 500));
        }

    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})

export const userTokenActivation  = async(user:iRegistrationBody) => {
    const activationToken = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign({
        activationToken,user
    },process.env.JWT_SECRET as Secret,{
        expiresIn : '10h'
    })
    return {activationToken,token}
}