import bcrypt from 'bcrypt';
import User  from '../models/User';
import Admin from '../models/Admin';
import { Request, Response } from 'express';


const userSignup = async(req:Request,role:string,res:Response) => {
    try {
        //Get user from database of same name if any
        const validateUser = async(email:string) =>{
            let user = await User.findOne({ email });
            
        }
    } catch (error) {
        
    }
}