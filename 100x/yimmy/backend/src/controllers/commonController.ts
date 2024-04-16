import bcrypt from 'bcrypt';
import UserModel, {User}  from '../models/User';
import Admin from '../models/Admin';
import { Request, Response } from 'express';
import { Document } from 'mongoose';


const userSignup = async(req:Request,role:string,res:Response) => {
    try {
        //validate Email ID
        const validateEmailID = async(email:string) : Promise<boolean> =>{
            let isEmailExist : User | null = await UserModel.findOne({ email });
            return !!isEmailExist;
        };

        //validating Username
        const validateUserName = async(username:string) : Promise<boolean> =>{
            let isUsernameExist : User | null = await UserModel.findOne({ username });
            return !!isUsernameExist; 
        };

        const savePassword

    } catch (error) {
        
    }
}