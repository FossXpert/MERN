import React, { FC } from 'react'

type Props = {
  handleSubmit : any;
  createCourseFinal : any;
  courseData:{
    name : string;
    description : string;
    price : string;
    estimatedPrice : string;
    tags : string;
    thumbnail : string;
    level : string;
    demoUrl : string;
    totalVideos : string;
    benefits : {title : string}[];
    prerequisites : {title : string}[];
    courseData : {
      videoSection : string;
      courseDataInside : {
        videoUrl : string;
        title : string;
        description : string;
      }[],
      suggestion : string;
    }[];
  };
}

const CoursePreview:FC<Props> = ({handleSubmit,createCourseFinal}) => {

  return (
    <>
    {/* <button type='submit' onClick={()=>handleSubmit()}>Submit</button>
    <button type='submit' onClick={()=>createCourseFinal()}>Create</button> */}
    <div className='flex flex-col h-full w-full items-center 
      border border-solid border-black'>
      <h1 className=''>Course Preview</h1>
      <div className='flex w-[97%] items-center flex-col h-full border border-solid border-green-500'>
      <div className='flex w-[97%] h-[30%] flex-col border border-solid border-green-500'></div>
      <div className='flex w-[97%] h-[30%] flex-col border border-solid border-green-500'>
        <div className='flex w-[20%] h-[30%] border border-solid border-green-500'></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default CoursePreview;
