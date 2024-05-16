require('dotenv').config();
import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";
import { userModel } from "../models/user";
import jwt, { Secret } from 'jsonwebtoken'
import sendMail from "../utills/sendMail";


interface iUserDetails{
    name : string;
    email :string;
    password? : string;
    role?:string;
}

export const userRegistration = async(req:Request,res:Response, next:NextFunction) => {
    try{

        const {email,password,role,name} = req.body;
            const emailId = await userModel.findOne({email});
            if(emailId){
                return res.status(409).json({
                    message : "email already exist"
                })          
            }
            const userData : iUserDetails= {
                email,name,password
            }
            const authdetails = await userAuthToken(userData);
            const token = authdetails.activationToken;
            const activationCode = authdetails.activationCode;

            const data = {
                user : {
                    name : userData.name,
                },
                activationCode
            }
            try{
                sendMail({
                    email : userData.email,
                    subject : "Verfy your Email",
                    template: 'activationEmail.ejs',
                    data
                })
            }catch(error:any){
                throw error
            }
            res.status(200).json({
                success : true,
                message : `check ${userData.email} for otp`,
                token : token
            })

        }catch(error:any){
        throw error;
    }
}

export const userAuthToken = async(userData : iUserDetails) =>{
    try {
        const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
        const activationToken =  jwt.sign({
            userData
        },process.env.JWT_SECRET as Secret,{
            expiresIn : '10h'
        })
        return {activationCode,activationToken};
    } catch (error:any) {
        throw error;
    }
}