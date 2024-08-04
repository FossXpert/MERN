import React, { FC, useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { FaSquareMinus, FaSquarePlus } from 'react-icons/fa6';
import { MdOutlinePlusOne, MdPlusOne } from 'react-icons/md';

type Props = {
  active : number;
  setActive : (active : number) => void;
  benefits : {title : string}[];
  setBenefits : (benefits : {title : string}[]) => void;
}

const CourseOptions:FC<Props> = ({active,setActive,benefits,setBenefits}) => {

  const handleSetBenefit = () => {
    setBenefits([...benefits , {title : ""}]);
  }

  return (
    <div className='flex w-full h-full
       items-center flex-col border border-solid border-blue-500'>
      <h1 className=''>Course Options</h1>
      {/* class for form */}
      <div className='flex w-3/4 h-full border border-solid border-green-500'>
        <div className='flex p-[0.5rem] gap-[0.5rem] border border-solid border-violet-300 w-full h-full
          justify-start items-center flex-col'>
          <label className='text-[1rem]' htmlFor=''>What are the benefits for the student in this course</label>
          {
            benefits.map((value,index) => (
              <input key={index} value={value.title} type='text' placeholder='Enter benefits' className='w-full box-border p-[0.5rem] border border-solid border-[#ccc] text-[1rem] outline-none '/>
            ))
          }
          <div className='flex pl-2 pr-2 justify-between w-full border border-solid border-green-500'>
          <FaSquarePlus onClick={handleSetBenefit}/>          
          <FaSquareMinus onClick={()=>benefits.pop()}/>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default CourseOptions