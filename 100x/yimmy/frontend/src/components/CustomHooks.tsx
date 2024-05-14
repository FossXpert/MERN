import { useEffect, useState } from "react"
import { BACKEND_BASE_URL } from "../config";
import axios from "axios";
import { zodCourseDetail } from "@rahulray8518/common";

export const useCourseManagementHook = () => {
    const [courses,setCourses]  = useState<zodCourseDetail[]>([]);
    const [adminCourses,setAdminCourses] = useState<zodCourseDetail[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        fetchAllCourse();
    },[]);

    const fetchAllCourse = async() => {
        try {
            const response = await axios.get(`${BACKEND_BASE_URL}/admin/getallcourse`);
            setCourses(response.data.courses);
            console.log(response.data.message)
            setLoading(false)
        } catch (error:any) {
            console.error("Error Fetching Courses",error.message);
            setLoading(false)
        }
    };

    const fetchAdminCourses = async(adminId:string) => {
      try {
        // console.log("adminId is ",adminId);
        const response = await axios.get(`${BACKEND_BASE_URL}/admin/getalladmincourse`,{
          headers:{
            'Content-Type' : 'application/json',
            adminid : adminId //biggest mistake i was doing is sending adminId,
            // but headers always consider small case so send everything in small case
          }
        });
        setAdminCourses(response.data.courses);
        console.log(response.data.message)
      } catch (error:any) {
        console.log("Error Fetching admin Course",error.message)
        throw error
      }
    }

    const createCourse = async(newCourse : zodCourseDetail) => {
        try{
            const response = await axios.post(`${BACKEND_BASE_URL}/admin/createcourse`,newCourse);
            setCourses([...courses , response.data]);
            if(response.status >= 200 && response.status < 300){
                console.log("Course Created Successfully")
                alert(response.data.Message)
            }else{
                console.error("Error Creating Courses")
            }
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

    const deleteCourse = async(courseId:string,adminId:string) => {
        try{
            const response = await axios.put(`${BACKEND_BASE_URL}/admin/deletecourse`,{
                params :{
                    courseId : courseId,
                    adminId : adminId
                }
            })
            setCourses([...courses,response.data]);
        }catch(error){
            console.error("Error deleting Courses")
            throw error;
        }
    }
    return {
        adminCourses,
        courses,
        loading,
        createCourse,
        updateCourse,
        deleteCourse,
        fetchAdminCourses
    }
}



/*
// useCourseManagement.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://your-api-url.com'; // Replace with your actual API URL

const useCourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch courses when the component mounts
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/courses`);
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setLoading(false);
    }
  };

  const createCourse = async (newCourse) => {
    try {
      const response = await axios.post(`${BASE_URL}/courses`, newCourse);
      setCourses([...courses, response.data]); // Add new course to the list
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const updateCourse = async (courseId, updatedCourse) => {
    try {
      const response = await axios.put(`${BASE_URL}/courses/${courseId}`, updatedCourse);
      const updatedCourses = courses.map(course => {
        if (course.id === courseId) {
          return response.data; // Replace the old course with updated data
        }
        return course;
      });
      setCourses(updatedCourses);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`${BASE_URL}/courses/${courseId}`);
      const updatedCourses = courses.filter(course => course.id !== courseId);
      setCourses(updatedCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return {
    courses,
    loading,
    createCourse,
    updateCourse,
    deleteCourse
  };
};

export default useCourseManagement;
*/
