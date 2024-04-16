import bcrypt from 'bcrypt';
import User  from '../models/User';
import Admin from '../models/Admin';
import { Request, Response } from 'express';


const userSignup = async(req:Request,role:string,res:Response) => {
    try {
        //Get user from database of same name if any
        const validateEmailID = async(email:string) =>{
            let isEmailExist = await User.findOne({ email });
            return isEmailExist?true:false;
        };

        //validating emailID
        const validateUserName = async(username:string) =>{
            let isUsernameExist = await User.findOne({ username });
            return isUsernameExist?true:false;
        };
    } catch (error) {
        
    }
}