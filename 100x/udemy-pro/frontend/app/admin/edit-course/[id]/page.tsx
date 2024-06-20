'use client'
import React from 'react'
import AdminSidebar from '../../../components/Admin/Sidebar/AdminSidebar'
import Heading from '../../../utills/Heading'
import EditCourse from '../../../components/Admin/EditCourse'
import DashboardHeader from '../../../components/Admin/DashboardHeader'
type Props = {}

const page = ({params}:any) => {

    const id = params?.id;
  return (
    <div>
        <div>
        <Heading 
        title='Admin-Dashboard' 
        description='Admin DashBoard For Udemy Pro Course selling app'
        keywords='admin,course,coursesellingapp'/>
    </div>
    <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar/>
        </div>
        <div className='w-[85%]'>
            <DashboardHeader/>
            <EditCourse id={id}/>
        </div>
    </div>
    </div>
  )
}

export default page