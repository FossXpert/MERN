import bcrypt from "bcrypt";
import UserModel, { User } from "../models/User";
import { NextFunction, Request, Response } from "express";

import { authenticateJWT, customRequest, generateJWT } from "./signup/jwtHandler";


require("dotenv").config();

const validateEmailID = async (email: string): Promise<User | null> => {
  let isEmailExist: User | null = await UserModel.findOne({ email });
  return isEmailExist;
};
const validateUserName = async (username: string): Promise<User | null> => {
  let isUsernameExist: User | null = await UserModel.findOne({ username });
  return isUsernameExist;
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
    //validate Email ID
    var mode = 'email';
    if(req.body.email===null){
        mode = 'mobile'
    }
    //validate Email
    if (!!(await validateEmailID(req.body.email)) && mode==='email') {
      res.status(409).json("This email id already exist");
      return;
    }
    //validate Mobile
    if (!!(await vaildateMobile(req.body.mobile)) && mode==='mobile') {
        res.status(409).json("This Mobile Number already exist");
        return;
      }
    //validating Username
    if (!!(await validateUserName(req.body.username))) {
      res.status(422).send("The username you have entered is not valid");
      return;
    }
    //save password using bcrypt
    const password = await encryptPassword(req.body.password);
    const user = new UserModel({
      ...req.body,
      password,
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
    let { email, password } = req.body;
    let userData = await validateEmailID(email);
    if (userData === null) {
      throw new Error("Invalid email address");
    }
    if (userData.role !== role) {
      throw new Error(
        `You are trying to access ${role}'s route with a ${userData.role}'s account`,
      );
    }
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
      throw new Error("Invalid email address or password");
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
