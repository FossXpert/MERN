'use client'

import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar'
import CreateCourse from '../../../app/components/Admin/Courses/CreateCourse'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <CreateCourse/>
    </div>
  )
}

export default page