import bcrypt from 'bcrypt';
import UserModel, {User}  from '../models/User';
import Admin from '../models/Admin';
import { Request, Response } from 'express';


const userSignup = async(req:Request,role:string,res:Response) => {
    try {
        //validate Email ID
        const validateEmailID = async(email:string) : Promise<boolean> =>{
            let isEmailExist : User | null = await UserModel.findOne({ email });
            return !!isEmailExist;
        };
        if (await validateEmailID(req.body.email)) {
            res.status(409).json('This email id already exist');
            return;
        }
        //validating Username
        const validateUserName = async(username:string) : Promise<boolean> =>{
            let isUsernameExist : User | null = await UserModel.findOne({ username });
            return !!isUsernameExist; 
        };
        if (await validateUserName(req.body.username)) {
            res.status(422).send("The username you have entered is not valid");
            return;
        }
        //save password using bcrypt

        const password = await bcrypt.hash(req.body.password , 12);
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

export default userSignup;