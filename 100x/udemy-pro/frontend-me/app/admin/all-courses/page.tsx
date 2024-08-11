'use client'

import AdminSidebar from '../../../app/components/Admin/Sidebar/AdminSidebar';
import AllCourses from '../../components/Admin/Courses/AllCourses'
import React, { FC } from 'react'
type Props = {
  active: number;
  setActive: (active: number) => void;
}

const page:FC<Props> = ({active,setActive}) => {
  return (
    <div className='flex border border-solid border-black'>
        <div className='flex w-[25%] border-solid border-black'>
            <AdminSidebar active={active} setActive={setActive}/>
        </div>
        <div className='flex w-[75%] border-solid border-black'>
        <AllCourses/>
        </div>
        
    </div>
  )
}

export default page