import bcrypt from 'bcrypt';
import User  from '../models/User';
import Admin from '../models/Admin';
import { Request, Response } from 'express';
import { Document } from 'mongoose';


const userSignup = async(req:Request,role:string,res:Response) => {
    try {
        //Get user from database of same name if any
        const validateEmailID = async(email:string) : Promise<boolean> =>{
            let isEmailExist = await User.findOne({ email });
            return isEmailExist?true:false;
        };

        //validating emailId
        const validateUserName = async(username:string) : Promise<boolean> =>{
            let isUsernameExist = await User.findOne({ username });
            return isUsernameExist?true:false;
        };
    } catch (error) {
        
    }
}