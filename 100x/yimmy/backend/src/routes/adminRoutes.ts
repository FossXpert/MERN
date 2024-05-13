import express, { Request, Response } from 'express'
import { Router } from "express";
import { createCourse, getAllAdminCourses, getAllCourse } from '../controllers/courseController';

const adminRouter : Router = express.Router();

adminRouter.post('/createcourse',async (req:Request, res: Response)=>{
    try {
        await createCourse(req,res);
    } catch (error: any) {
        console.log(error.message);
        throw(error)
    }
})

adminRouter.get('/getallcourse',async(req:Request,res:Response)=>{
    try {
        await getAllCourse(req,res);
    } catch (error:any) {
        console.log(error.message)
        throw error
    }
})

adminRouter.get('/getalladmincourse',async(req:Request,res:Response)=>{
    try {
        await getAllAdminCourses(req,res);
    } catch (error:any) {
        console.log(error.message)
        throw error
    }
})
export default adminRouter;