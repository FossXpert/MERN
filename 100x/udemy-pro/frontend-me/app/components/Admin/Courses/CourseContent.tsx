import React, { FC } from 'react'

type Props = {
  active : number;
  setActive : (active:number) => void;
  courseContentData : any;
  setCourseContentData  : (courseContentData : any) => void;

}

const CourseContent:FC<Props> = ({active,setActive,courseContentData,setCourseContentData}) => {
  return (
    <>
    <div className='flex w-full h-full '>
      
    </div>
    </>
  )
}

export default CourseContent