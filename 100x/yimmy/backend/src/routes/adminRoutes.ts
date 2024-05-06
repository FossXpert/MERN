import express, { Request, Response } from 'express'
import { Router } from "express";
import { createCourse } from '../controllers/courseController';

const adminRouter : Router = express.Router();

adminRouter.post('/createcourse',async (req:Request, res: Response)=>{
    try {
        await createCourse(req,res);
    } catch (error: any) {
        console.log(error.message);
        throw(error)
    }
})
