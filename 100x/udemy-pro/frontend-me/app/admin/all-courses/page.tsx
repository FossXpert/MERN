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
    <div className='flex'>
        <div>
            <AdminSidebar active={active} setActive={setActive}/>
        </div>
        
        <AllCourses/>
    </div>
  )
}

export default page