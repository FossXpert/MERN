import React, { FC } from 'react'
import CourseCard from './CourseCard'
import Header2 from '../Header2'

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  route: string;
  setRoute: (route: string) => void;
}

const Course:FC<Props> = ({open,setOpen,route,setRoute}) => {
  return (
    <>
      <div className={`flex flex-col`}>
        <Header2
          open={open}
          setOpen={setOpen}
          route={route}
          setRoute={setRoute}
        />
      <div className={`flex gap-6 flex-wrap w-full h-full`}>
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

    </>
  )
}

export default Course