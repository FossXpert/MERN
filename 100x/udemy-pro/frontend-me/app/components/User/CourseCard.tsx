import React, { FC } from 'react'

type Props = {
    name : string;
    price : string;
    estimatedPrice : string;
    tags : string;
    thumbnail : string;
    level : string;
    demoUrl : string;
    totalVideos : string;
}
const border = 'border border-solid border-black';
const CourseCard:FC<Props> = ({name,price,estimatedPrice,tags,thumbnail,level,demoUrl,totalVideos}) => {
  return (
    <>
        <div className={`flex flex-col w-[250px] h-[190px] ${border}`}>
            
        </div>
    </>
  )
}

export default CourseCard