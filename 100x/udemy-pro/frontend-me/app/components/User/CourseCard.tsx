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

const CourseCard:FC<Props> = ({name,price,estimatedPrice,tags,thumbnail,level,demoUrl,totalVideos}) => {
  return (
    <>
        <div className='flex'></div>
    </>
  )
}

export default CourseCard