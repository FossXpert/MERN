import React, { FC, useState } from 'react'
import CourseCard from './CourseCard'
import Header2 from '../Header2'

type Props = {

}

const Course = () => {
  const [open,setOpen] = useState(false);
  const [route, setRoute] = useState('signin');

    
  return (
    <>
      <div className={`flex flex-col`}>
        <Header2
          open={open}
          setOpen={setOpen}
          route={route}
          setRoute={setRoute}
        /> 
      <div className={`flex items-center gap-6 flex-wrap w-full h-full`}>
        <div className={`flex items-center justify-center gap-6 flex-wrap w-full h-full`}>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
      </div>
      </div>

    </>
  )
}

export default Course