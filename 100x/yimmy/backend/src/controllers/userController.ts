import bcrypt from "bcrypt";
import UserModel, { User } from "../models/User";
import { NextFunction, Request, Response } from "express";
import {z} from "zod";

import {customRequest, generateJWT } from "./signup/jwtHandler";
import { parse } from "dotenv";


require("dotenv").config();

const validateEmailID = async (usernameOrEmail: string): Promise<User | null> => {
  const isEmail = /\S+@\S+\.\S+/.test(usernameOrEmail);
  let isEmailExist: User | null = await UserModel.findOne({
    $or: [{ email: isEmail? usernameOrEmail : ''}, { username: usernameOrEmail }],
  }); //About this operator (https://sprl.in/166MJbR)
  return isEmailExist;
};
const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};
const vaildateMobile = async(mobile:string):Promise<User|null> => {
    let isMobileExist : User|null = await UserModel.findOne({mobile});
    return isMobileExist;
}
const comparePassword = async (
  password: string,
  existingPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, existingPassword);
};

export const userSignup = async (req: Request, role: string, res: Response) => {
  try {
    //validate Email and username

    let inputProps = z.object({
      email: z.string().email(),
      password: z.string().min(3),
      mobile: z.string().min(10).max(10),
      username: z.string().min(3),
    });    
    const parsedInput = inputProps.safeParse(req.body);
    if(!parsedInput.success){
      return res.status(400).json(parsedInput.error.errors);
    }

    const email = parsedInput.data.email;
    const username = parsedInput.data.username;
    const mobile = parsedInput.data.mobile;
    const password = parsedInput.data.password;

    if (!!(await validateEmailID(email))) {
      res.status(409).json("Email already exist");
      return;
    }
    if(!!(await validateEmailID(username))){
      res.status(409).json("Username already exist");
      return;
    }
    //validate Mobile
    if (!!(await vaildateMobile(mobile))) {
        res.status(409).json("This Mobile Number already exist");
        return;
      }
    //save password using bcrypt
    const encryPassword = await encryptPassword(password);
    const user = new UserModel({
      email,
      username,
      encryPassword,
      role,
    });
    await user.save();
    return res.status(201).json({
      message: "Hurry! now you are successfully registred. Please login.",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const userLogin = async (req: Request, role: string, res: Response) => {
  try {

    let inputProps = z.lazy(()=>
      z.object({
      email : z.string().email(),
      password : z.string().min(3)
    }).or(z.object({
      username : z.string().min(3),
      password : z.string().min(3)
    })));
    
    const parsedInput = inputProps.safeParse(req.body);
    if(!parsedInput.success){
      console.log(parsedInput.error.errors)
      return res.status(400).json(parsedInput.error.errors);
    }
    const email : string | undefined= parsedInput.data.email;
    const username : string | undefined = parsedInput.data.username;

    if(!email && !username){
      return res.status(400).json("Please provide email or username");
    }

    // Find user by email or username
    let userData;
    if (email) {
      userData = await validateEmailID(email);
    } else if (username) {
      userData = await validateEmailID(username);
    } else {
      throw new Error("Invalid email address or username");
    }
    if(!userData){
      return res.status(404).json("User not found");
    }
    if (userData.role !== role) {
      throw new Error(
        `You are trying to access ${role}'s route with a ${userData.role}'s account`,
      );
    }

    //Password time
    const password = parsedInput.data.password;
    if (await comparePassword(password, userData.password)) {
      console.log("Userdata  :" + userData);
      let token = generateJWT(userData);
      res.status(200).send({
        message: "Success",
        data: userData,
        Token: token,
      });
    } else {
      // Handle incorrect password
      throw new Error("Incorrect password");
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const check = (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      header: req.headers,
      body: req.body,
      param: req.params,
      payload : (req as customRequest).payload
    }),
  );
};
