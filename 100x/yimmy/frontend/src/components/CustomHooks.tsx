import { useEffect, useState } from "react"
import { BACKEND_BASE_URL, BASE_URL } from "../config";
import axios from "axios";
import { zodCourseDetail } from "@rahulray8518/common";

const useCourseManagementHook = () => {
    const [courses,setCourses]  = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetchCourses();
    },[]);

    const fetchCourses = async() => {
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
            const response = axios.post(`${BACKEND_BASE_URL}/admin/createcourse`,newCourse);
            setCourses([...courses , response.data]);
        }catch(error){
            console.error("Error Creating Courses")
            throw error;
        }
    }


}