import Image from 'next/image';
import React, { FC } from 'react'
import thumbnail from '../../assets/zoom.png'
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
const shadow = 'shadow-md shadow-black'
const CourseCard:FC<Props> = ({name,price,estimatedPrice,tags,thumbnail,level,demoUrl,totalVideos}) => {
  return (
    <>
        <div className={`flex flex-col bg-[rgb(249,250,251)] w-[250px] h-[310px] p-2 ${border} !border-[#ccc] rounded-sm shadow-md shadow-grey-700`}>
            <div className={`flex flex-col w-full h-[185px] ${border}`}>
              <Image src={thumbnail} alt='text' width={250}/>
            </div>
            <div className={`flex flex-col w-full h-[125px] ${border} !border-red-500`}>
              
            </div>
        </div>
    </>
  )
}

export default CourseCard