import { Response } from "express";
import CourseModel, { Course } from "../models/Course";
import { courseInput } from "@rahulray8518/common";


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
        const parseInput = courseInput.safeParse(req.body);
        const title = parseInput.data?.title;
        const description = parseInput.data?.description;
        const price = parseInput.data?.price;
        const imageLink = parseInput.data?.imageLink;
        const id = parseInput.data?.id
        
        const newCourse = new CourseModel({
            
        }) 
    } catch (error) {
        console.log("error in createCourse Route",error);
        throw error;
    }
}