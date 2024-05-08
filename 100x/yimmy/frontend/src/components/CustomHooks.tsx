import { useEffect, useState } from "react"
import { BACKEND_BASE_URL, BASE_URL } from "../config";
import axios from "axios";
import { zodCourseDetail } from "@rahulray8518/common";

const useCourseManagementHook = () => {
    const [courses,setCourses]  = useState<zodCourseDetail[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        fetchCourse();
    },[]);

    const fetchCourse = async() => {
        try {
            const response = await axios.get(`${BACKEND_BASE_URL}/admin/getcourses`);
            setCourses(response.data);
            setLoading(false)
        } catch (error) {
            console.error("Error Fetching Courses",error);
            setLoading(false)
        }
    };

    const createCourse = async(newCourse : zodCourseDetail) => {
        try{
            const response = await axios.post(`${BACKEND_BASE_URL}/admin/createcourse`,newCourse);
            setCourses([...courses , response.data]);
        }catch(error){
            console.error("Error Creating Courses")
            throw error;
        }
    }

    const updateCourse = async(courseId : string, adminId:string) => {
        try{
            const response = await axios.put(`${BACKEND_BASE_URL}/admin/updatecourse`,{
                params :{
                    courseId : courseId,
                    adminId : adminId
                }
            })
            setCourses([...courses,response.data]);
        }catch(error){
            console.error("Error updating Courses")
            throw error;
        }
    }


}