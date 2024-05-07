import { useEffect, useState } from "react"
import { BACKEND_BASE_URL, BASE_URL } from "../config";
import axios from "axios";

const useCourseManagementHook = () => {
    const [courses,setCourses] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
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
        fetchCourses();
    },[]);


    const createCourse = async() => {
        
    }


}