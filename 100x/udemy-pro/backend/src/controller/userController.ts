require('dotenv').config();
import ErrorHandler from "../utills/errorHandlers";
import { catchAsyncError, success } from "../middleware/catchAsyncError";
import { Request, Response,NextFunction } from "express";
import { iUser, userModel} from "../models/user";
import jwt, { Secret } from 'jsonwebtoken';
import ejs from 'ejs';
import path from 'path';
import sendMail from "../utills/sendMail";
import { sendToken } from "../utills/jwt";

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
        const activationCode = activationToken.activationCode;

        const data = {
            user : {
                name:user.name,
            },
            activationCode
        }

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
    const activationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const token = jwt.sign({
        activationCode,user
    },process.env.JWT_SECRET as Secret,{
        expiresIn : '10h'
    })
    return {activationCode,token}
}

interface iActivationRequest{
    authentication_token: string;
    authentication_code: string;
}
export const activateUser = catchAsyncError(async(req:Request,res:Response,next:NextFunction) => {
    try {
        const {authentication_code,authentication_token} = req.body as iActivationRequest;
        const isTokenValid =  jwt.verify(authentication_token,process.env.JWT_SECRET as Secret)
        if(!isTokenValid){
            return res.status(500).json({
                success : await success(res.statusCode),
                message : "Token Not Valid"
            })
        }
        //Great learning hwre, see how can we typecast accourding to our use but onr hting how otp is coming in user.
        const newUser : {user : iUser,activationCode:string} = isTokenValid as {user : iUser, activationCode:string};
        console.log(newUser)
        console.log(authentication_code,newUser.activationCode)
        if(newUser.activationCode !== authentication_code){
            return next(new ErrorHandler('Invalid Activation Code',400));
        }

        const {email,password,name} = newUser.user;
        const emailExist = await userModel.findOne({email});
        if(emailExist){
            return next(new ErrorHandler('Email already exists',400));
        }

        const user = await userModel.create({
            name,
            email,
            password,
        });
        if(user){
            return res.status(200).json({
                success : await success(res.statusCode),
                message : "User Created SuccessFully"
            })
        }
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})

interface iLoginRequest{
    email:string;
    password:string;
}
export const loginUser = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password} = req.body as iLoginRequest;
        if(!email || !password){
            return next(new ErrorHandler('Email or Password is Empty',400));
        }
        console.log("c")
        const user = await userModel.findOne({email});
        
        if(!user){
            return next(new ErrorHandler('User not found',400));
        }
 
        const isPasswordMatch : boolean = await user.comparePassword(password);
        console.log("Password is ",isPasswordMatch)
        if(!isPasswordMatch){
            return next(new ErrorHandler('Incorrect Password',400));
        };
       
        await sendToken(user,200,res);

    }catch(error:any){
        return next(new ErrorHandler(error.message,400));
    }
})

export const logoutUser = catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {

        res.cookie('access_token','',{maxAge:1});
        res.cookie('refresh_token','',{maxAge:1});

        res.status(200).json({
            success : await success(res.statusCode),
            message : "Logged Out User Successfully",
        })

    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
})
