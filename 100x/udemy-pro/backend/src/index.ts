require('dotenv').config();
import { app } from "./app";
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import connectDB from "./utills/db";
import errorMiddleware from "./middlewares/error";
import userRouter from "./routes/userRoutes";
import cloudinary from 'cloudinary';

app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors());

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
})

app.use('/api/user',userRouter);
app.use(errorMiddleware);

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({
        message : "Valid Route",
    })
})

app.all('*',(req:Request,res:Response,next:NextFunction)=>{
    res.status(404).json({
        message : "Invalid Route",
    })
})
