import React, { FC, useState } from 'react'
import toast from 'react-hot-toast';
import { FaRupeeSign } from 'react-icons/fa6';
import { TbArrowBadgeRight } from "react-icons/tb";
import { LuDot } from "react-icons/lu";


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

const CoursePreview:FC<Props> = ({handleSubmit,createCourseFinal,courseData}) => {

  const handleReadMore = () => {
    toast.success("Readmore");
  }

  const [isExpanded,setIsExpanded] = useState(false);

  const handleTextExpansion = (text:string,limit:number) => {
    if(text.length <=limit) return text;

    return text.substring(0,limit)+ '...';
  }

  return (
    <>
    <button type='submit' onClick={()=>handleSubmit()}>Submit</button>
    <button type='submit' onClick={()=>createCourseFinal()}>Create</button>
    <div className='flex flex-col h-full w-full items-center 
      border border-solid border-black'>
      <h1 className=''>Course Preview</h1>
      <div className='flex w-[97%] items-center flex-col h-full border border-solid border-green-500'>
      <div className='flex w-[97%] h-[30%] flex-col border border-solid border-green-500'></div>
      <div className='flex w-[97%] h-auto flex-col border border-solid border-green-500'>
        <div className='flex flex-col w-auto h-auto border border-solid  border-green-500'>
          <h2>{courseData.name}</h2>
          <br/>
          <div className='flex w-auto gap-2 items-center  border border-solid  border-green-500'>
            <FaRupeeSign className='ml-2'/>
            <h3>{courseData.price}</h3>
            <h3 className='text-[#ccc]'><s>{courseData.estimatedPrice}</s></h3>
          </div>
          <div className='flex p-2 border border-solid border-black'>
            <input className='input-box-1 !w-[30%]' placeholder='Discount Code...'/>
            <button className='button-global ml-2 !bg-black !p-2'>
              Apply 
            </button>
          </div>
          <button className='button-global mt-2 ml-2 mb-2'>
            Buy Now
          </button>
        </div>
        <div className='flex flex-col p-2 w-auto h-auto border border-solid  border-green-500'>
          <h3>
            What&apos;s Included
          </h3>
          <ul className='flex flex-col list-none text-[0.9rem] mt-2'>
            <li className='flex items-center gap-1'><TbArrowBadgeRight/> Source Code Included</li>
            <li className='flex items-center gap-1'><TbArrowBadgeRight/> Full Lifetime Access</li>
            <li className='flex items-center gap-1'><TbArrowBadgeRight/> Certification Of Completion</li>
            <li className='flex items-center gap-1'><TbArrowBadgeRight/> Premium Support</li>
          </ul>
        </div>
        <div className='flex flex-col p-2 w-auto h-auto border border-solid  border-green-500'>
          <h3>Description</h3>
          <p>
            {isExpanded ? courseData.description : handleTextExpansion(courseData.description,100)}
            <span className='cursor-pointer text-[0.9rem] text-blue-400' onClick={()=>setIsExpanded(!isExpanded)}>
            {isExpanded ? "(Read Less)" : "(Read More)"}
            </span>
          </p>
        </div>
        <div className='flex p-2 gap-2 w-auto h-auto border border-solid  border-green-950 m-2'>
          <div className='flex flex-col w-auto h-auto border border-solid border-yellow-500'>
          <div className='flex flex-col w-full gap-4  border border-solid border-black'>
            <h3>Course Content</h3>
            <div className='flex justify-between items-center w-auto border border-solid border-black'>
              <div className='flex items-center w-auto border border-solid border-black'>
              <p className='text-gray-700 text-[0.9rem] p-2'>{courseData.courseData.length} sections</p>
              <LuDot/>
              <p className='text-gray-700 text-[0.9rem] p-2'>{courseData.courseData.length} sections</p>
              <LuDot/>
              <p className='text-gray-700 text-[0.9rem] p-2'>{courseData.courseData.length} sections</p>
              </div>
              <h4 className='p-2 border border-solid border-black text-[.9rem] pl-4 text-[#7F56D9] hover:text-blue-600'>Expand All Sections</h4>
            </div>
          </div>
          <div className='flex w-auto h-full flex-col border border-solid border-black'>

            {courseData.courseData.map((value,index)=>(
              <div key={index} className='flex w-auto h-full flex-col border border-solid border-black'>
                  {value.videoSection}
              </div>
            ))}
          </div>
          </div>
          <div className='flex w-[30%] h-full border border-solid border-black'>
            hi
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default CoursePreview;
