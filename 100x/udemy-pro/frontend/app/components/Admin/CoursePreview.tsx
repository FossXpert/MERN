import React from 'react'
import {FC} from 'react'
import CourseData from './CourseData';
type Props = {
    active : number;
    setActive : (active:number) => void;
    courseData : any
    handleCourseCreate : any;
}

const CoursePreview : FC<Props>= ({courseData,handleCourseCreate,active,setActive}) => {
  return (
    <div className='w-[90%] m-auto py-5 mb-5'>
      <div className='w-full relative'>
        <div className='w-full mt-10'>
          <CoursePlayer/>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview