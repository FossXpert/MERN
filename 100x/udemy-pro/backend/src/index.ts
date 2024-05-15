require('dotenv').config();
import { app } from "./app";
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import connectDB from "./utills/db";
import errorMiddleware from "./middleware/error";

app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors());

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
})

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

app.use(errorMiddleware);