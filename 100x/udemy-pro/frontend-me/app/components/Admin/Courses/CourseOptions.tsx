import React, { FC } from 'react'

type Props = {
  active : number;
  setActive : (active : number) => void;
}

const CourseOptions:FC<Props> = ({active,setActive}) => {
  return (
    <div className='flex w-full h-full
       items-center flex-col border border-solid border-blue-500'>
      <h1 className=''>Course Options</h1>
      {/* class for form */}
      <div className='flex w-3/4 h-full border border-solid border-green-500'>
        <div className='flex border border-solid border-violet-300 w-full h-[75px]
        justify-center items-center flex-col'>
        <label className='text-[1rem]' htmlFor=''>What are the benefits for the student in this course</label>
        <input type='text' placeholder='Enter benefits' className='w-full'/>
        </div>
      </div>
    </div>
   
  )
}

export default CourseOptions