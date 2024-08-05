import React, { FC } from 'react';
import { FaSquareMinus, FaSquarePlus } from 'react-icons/fa6';
import { IoMdArrowDropdown, IoMdArrowDropdownCircle } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

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

  const handleVideoSectionChange = (index:number,value:string) => {
    const newCourseContentData = [...courseContentData];
    newCourseContentData[index].videoSection = value;
    setCourseContentData(newCourseContentData);
  }
  const handleVideoSectionContentDataAdd = async(index:number) => {
    const newContent = {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: "",
      links: [{ title: "", url: "" }],
      suggestion: "",
    };
    setCourseContentData([...courseContentData,newContent]);
  }
  return (
    <>
      <div className='flex w-full h-full
       items-center flex-col border border-solid border-blue-500'>
        <h1 className=''>Course Content</h1>
        <div className='flex w-3/4 flex-col h-auto border border-solid border-green-500'>
          {
            courseContentData.map((value,index) => (
              <div key={index} className='flex flex-col w-full h-full p-2 m-2 border border-solid border-orange-500 shadow-sm'>
                <div className='flex w-full h-full p-2 m-2 border border-solid border-black-500 shadow-sm'>
                  <input
                  type='text'
                  value={value.videoSection}
                  onChange={(e)=>handleVideoSectionChange(index,e.target.value)}
                  className='w-[85%] text-xl font-semibold'/>
                  <div className='flex w-[15%] p-2 items-center h-auto flex-row border border-solid border-black-500 justify-between'>
                  <IoMdArrowDropdownCircle/>
                  <FaSquarePlus/>
                  <MdDelete/>
                  </div>
                </div>
              <div className='flex flex-col w-full h-full p-2 m-2 border border-solid border-black-500 shadow-sm'>
              <FaSquarePlus className='cursor-pointer' onClick={(e)=>handleVideoSectionContentDataAdd(index)}/>
                <div className='flex flex-col p-2 gap-2 w-full h-auto mt-2 border border-solid border-violet-500'>
                    <div className=' flex flex-col gap-2 w-full h-auto mt-2 border border-solid border-violet-500'>
                    <label className='text-[1rem]' htmlFor='title'>Video Title</label>
                    <input
                    type='text' 
                    placeholder='Enter Video title'
                    value={value.title}
                    className='w-full box-border p-[0.5rem] border border-solid border-[#ccc] text-[1rem] outline-none'/>
                    </div>
                    <div className=' flex flex-col gap-2 w-full h-auto mt-2 border border-solid border-violet-500'>
                    <label className='text-[1rem]' htmlFor='title'>Video URL</label>
                    <input
                    type='text' 
                    placeholder='Enter Video URL'
                    value={value.videoUrl}
                    className='w-full box-border p-[0.5rem] border border-solid border-[#ccc] text-[1rem] outline-none'/>
                    </div>
                    <div className=' flex flex-col gap-2 w-full h-auto mt-2 border border-solid border-violet-500'>
                    <label className='text-[1rem]' htmlFor='title'>Video Description</label>
                    <textarea 
                    rows={5}
                    cols={50}
                    placeholder='Enter Video Description'
                    value={value.description}
                    className='w-full box-border resize-none p-[0.5rem] border border-solid border-[#ccc] text-[1rem] outline-none'/>
                    </div>
                    {/* for adding link array */}
                    <div className=' flex flex-col gap-2 w-full h-auto mt-2 border border-solid border-yellow-500'>
                    {
                      value.links.map((value,index)=>(
                      <div className=' flex flex-col gap-2 w-full h-auto mt-2 border border-solid border-violet-500 shadow-md'>
                        <div className='flex w-full h-auto items-center justify-between pl-2 pr-2'>
                        <label className='text-[1rem]' htmlFor='title'>Link {index+1}</label>
                        <FaSquareMinus/>
                        </div>
                        <input
                        type='text' 
                        placeholder={`Enter Link Title`}
                        value={value.title}
                        className='w-full box-border p-[0.5rem] border border-solid border-[#ccc] text-[1rem] outline-none'/>
                        <input
                        type='text' 
                        placeholder={`Enter Link URL`}
                        value={value.url}
                        className='w-full box-border p-[0.5rem] border border-solid border-[#ccc] text-[1rem] outline-none'/>
                      </div>
                      ))
                    }
                    <FaSquarePlus className='ml-2 cursor-pointer'/>
                    </div>
                </div>
              </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default CourseContent;
