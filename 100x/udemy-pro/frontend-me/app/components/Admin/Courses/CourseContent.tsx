import React, { FC } from 'react';

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseContentData: {
    videoUrl: string;
    title: string;
    description: string;
    videoSection: string;
    links: {
      title: string;
      url: string;
    }[];
    suggestion: string;
  }[];
  setCourseContentData: (courseContentData: {
    videoUrl: string;
    title: string;
    description: string;
    videoSection: string;
    links: {
      title: string;
      url: string;
    }[];
    suggestion: string;
  }[]) => void;
};

const CourseContent: FC<Props> = ({ active, setActive, courseContentData, setCourseContentData }) => {

  return (
    <>
      <div className='flex w-full h-full
       items-center flex-col border border-solid border-blue-500'>
        <h1 className=''>Course Content</h1>
        <div className='flex w-3/4 flex-col h-auto border border-solid border-green-500'>
          {/* Content rendering logic can be added here */}
          hi
          <div className='flex w-full h-full border border-solid border-orange-500'>

          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
