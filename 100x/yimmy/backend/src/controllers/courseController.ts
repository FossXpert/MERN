import { Request, Response } from "express";
import CourseModel from "../models/Course";
import { courseInput, zodCourseDetail } from "@rahulray8518/common";


export const isCourseExist = async(id:string) : Promise<zodCourseDetail | null> => {
    try {
        const courseDetail : zodCourseDetail | null = await CourseModel.findOne({id});
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
        const admin_id = parseInput.data?.admin_id;
        const courseId = parseInput.data?.courseId;

        const newCourse = new CourseModel({
            title,description,price,imageLink,admin_id,courseId
        }) 
        await newCourse.save();
        return res.status(200).json({
            Message : "Saved Succesfully",
            InputBody : newCourse
        })
    } catch (error) {
        console.log("error in createCourse Route",error);
        throw error;
    }
}
