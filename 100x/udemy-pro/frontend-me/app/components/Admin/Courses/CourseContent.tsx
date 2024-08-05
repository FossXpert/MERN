import React, { FC } from 'react'

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseContentData: {
    videoUrl: "",
    title: "",
    description: "",
    videoSection: "Untitled Section",
    links: [
      {
        title: "",
        url: ""
      },
    ],
    suggestion: "",
  }[];
  setCourseContentData: (courseContentData:{
    videoUrl: "",
    title: "",
    description: "",
    videoSection: "Untitled Section",
    links: [
      {
        title: "",
        url: ""
      },
    ],
    suggestion: "",
  }[]) => void;
}

const CourseContent: FC<Props> = ({ active, setActive, courseContentData, setCourseContentData }) => {

  return (
    <>
      <div className='flex w-full h-full
       items-center flex-col border border-solid border-blue-500'>
        <h1 className=''>Course Content</h1>
        {/* Untitled Section k Main containera jiske end me buttonhoga */}
        <div className='flex w-3/4 flex-col h-auto border border-solid border-green-500'>
          {
          }
          <div className='flex w-full h-full  border border-solid border-orange-500'>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default CourseContent