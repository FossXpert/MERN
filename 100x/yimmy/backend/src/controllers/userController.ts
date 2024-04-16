import bcrypt from 'bcrypt';
import UserModel, {User}  from '../models/User';
import Admin from '../models/Admin';
import { Request, Response } from 'express';
import { Jwt } from 'jsonwebtoken';

require('dotenv').config()

const validateEmailID = async(email:string) : Promise<User|null> =>{
    let isEmailExist : User | null = await UserModel.findOne({ email });
    return isEmailExist;
};
const validateUserName = async(username:string) : Promise<User|null> =>{
    let isUsernameExist : User | null = await UserModel.findOne({ username });
    return isUsernameExist; 
};
const encryptPassword = async(password: string):Promise<string>=>{
    return await bcrypt.hash(password,12);
};
const comparePassword = async(password : string,existingPassword : string):Promise<boolean>=>{
    return bcrypt.compare(password, existingPassword);
};
const userSignup = async(req:Request,role:string,res:Response) => {
    try {
        //validate Email ID
        if ((!!await validateEmailID(req.body.email))) {
            res.status(409).json('This email id already exist');
            return;
        }
        //validating Username
        if ((!!await validateUserName(req.body.username))) {
            res.status(422).send("The username you have entered is not valid");
            return;
        }
        //save password using bcrypt
        const password = await encryptPassword(req.body.password);
        const user = new UserModel({
            ...req.body,
            password,
            role
        })
        await user.save();
        return res.status(201).json({
            message: "Hurry! now you are successfully registred. Please login."
          });

    } catch (error:any) {
        return res.status(500).json({
            message: error.message
        })
    }
}
const userLogin = async(req: Request, res: Response)=>{
    try {
        let {email,password} = req.body;
        //checking if email exist
        if(!(!!await validateEmailID(email))){
            throw new Error("Email Doesn't Exist")
        };
        //verifying the password
        if(await comparePassword(password,email)){
            
        }
    } catch (error:any) {
        
    }
};
export default userSignup;