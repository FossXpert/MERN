import { Request, Response } from "express";
import CourseModel from "../models/Course";
import { courseInput, zodCourseDetail } from "@rahulray8518/common";


export const isCourseExist = async(courseId:string) : Promise<zodCourseDetail | null> => {
    try {
        const courseDetail : zodCourseDetail | null = await CourseModel.findOne({courseId});
        return courseDetail;
    } catch (error) {
        console.log(error)
        throw(error)
    }
}
export const createCourse = async(req:Request,res:Response) => {
    try {
        const parseInput = courseInput.safeParse(req.body);
        if(!parseInput.success){
            return res.status(500).json({
                message : "zod input validation failed",
                error : parseInput.error
            })
        }
        const title = parseInput.data?.title;
        const description = parseInput.data?.description;
        const price = parseInput.data?.price;
        const imageLink = parseInput.data?.imageLink;
        const admin_id = parseInput.data?.admin_id;
        const courseId = parseInput.data?.courseId;
        const category = parseInput.data.category;
        if(await isCourseExist(courseId)){
            return res.status(409).json('Course already exist')
        }
        const newCourse = new CourseModel({
            title,description,price,imageLink,admin_id,courseId,category
        }) 
        await newCourse.save();
        return res.status(200).json({
            Message : "Saved Succesfully",
            InputBody : newCourse,
        })
    } catch (error:any) {
        console.log("error in createCourse Route",error.message);
        throw error; 
    }
}
