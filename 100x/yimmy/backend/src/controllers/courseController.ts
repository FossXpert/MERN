import { Response } from "express";
import CourseModel, { Course } from "../models/Course";


export const isCourseExist = async(id:string) : Promise<Course | null> => {
    try {
        const courseDetail : Course | null = await CourseModel.findOne({id});
        return courseDetail;
    } catch (error) {
        console.log(error)
        throw(error)
    }
}
export const createCourse = async(req:Request,res:Response) => {
    try {
        if(!(!!isCourseExist)){
            return res.status(409).json('Course already exist')
        }
        const newCourse = new CourseModel({
            id:req.body.id,
            name:req.body.name,
        }) 
    } catch (error) {
        console.log("error in createCourse Route",error);
        throw error;
    }
}