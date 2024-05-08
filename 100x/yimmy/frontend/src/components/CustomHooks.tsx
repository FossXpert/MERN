import { useEffect, useState } from "react"
import { BACKEND_BASE_URL } from "../config";
import axios from "axios";
import { zodCourseDetail } from "@rahulray8518/common";

const useCourseManagementHook = () => {
    const [courses,setCourses]  = useState<zodCourseDetail[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        fetchAllCourse();
    },[]);

    const fetchAllCourse = async() => {
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
        courses,
        loading,
        createCourse,
        updateCourse,
        deleteCourse
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
