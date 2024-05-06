import express, { Request, Response } from 'express'
import { Router } from "express";

const adminRouter : Router = express.Router();

adminRouter.post('/createcourse',(req:Request, res: Response)=>{
    try {
        await createCourse(req);
    } catch (error) {
        
    }
})
