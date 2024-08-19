import React, { FC, useState } from 'react'
import toast from 'react-hot-toast';
import { FaChevronDown, FaChevronUp, FaRupeeSign } from 'react-icons/fa6';
import { TbArrowBadgeRight } from "react-icons/tb";
import { LuDot } from "react-icons/lu";
import { MdOndemandVideo } from 'react-icons/md';
import { useGetSingleCourseQuery } from '../../../redux/features/courses/courseApi';


type Props = {
  id : string;
  active: number;
  setActive: (active: number) => void;
  handleSubmit: any;
  createCourseFinal: any;
  courseData: {
    name: string;
    description: string;
    price: string;
    estimatedPrice: string;
    tags: string;
    thumbnail: string;
    level: string;
    demoUrl: string;
    totalVideos: string;
    benefits: { title: string }[];
    prerequisites: { title: string }[];
    courseData: {
      videoSection: string;
      courseDataInside: {
        videoUrl: string;
        title: string;
        description: string;
      }[],
      suggestion: string;
    }[];
  };
}

const CoursePreview: FC<Props> = ({id, active, setActive, handleSubmit, createCourseFinal, courseData }) => {
  const idx = id;
  console.log(idx);

  const {refetch,data,error} = useGetSingleCourseQuery({id},{refetchOnMountOrArgChange:true});

  // courseData = data.Allcourses[0];
  console.log(data);


  return (
    <>
      
    </>
  )
}

export default CoursePreview;
