'use client'

import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar'
import CreateCourse from '../../../app/components/Admin/Courses/CreateCourse'
import React, { FC } from 'react'

type Props = {
    active: number;
    setActive: (active: number) => void;
}

const page:FC<Props> = ({active,setActive}) => {
  return (
    <div>
        <AdminSidebar active={active} setActive={setActive}/>
        <CreateCourse/>
    </div>
  )
}

export default page