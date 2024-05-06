import { Response } from "express";
import CourseModel from "../models/Course";



export const isCourseExist = async(id:string)  => {

    try {
        const courseDetail = await CourseModel.findOne({id});
        return !!courseDetail;
    } catch (error) {
        console.log(error)
        throw(error)

    }
}
export const createCourse = async(req:Request,res:Response) => {
    try {
        
    } catch (error) {
        
    }
}