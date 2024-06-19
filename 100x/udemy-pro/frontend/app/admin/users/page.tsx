'use client'
import AllUsers from '../../components/Admin/Users/AllUsers'
import DashboardHero from '../../components/Admin/DashboardHero'
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar'
import AdminProtected from '../../hooks/adminProtected'
import Heading from '../../utills/Heading'
import React, { FC } from 'react'

type Props = {
 isTeam : boolean;
}

const page:FC<Props>= ({isTeam}) => {
  return (
    <div>
        <AdminProtected>
        <Heading
            title='Admin-Dashboard'
            description='Admin DashBoard For Udemy Pro Course selling app'
            keywords='admin,course,coursesellingapp' />
            <div className='flex h-[200vh]'>
                <div className='1500px:w-[16%] w-1/5'>
                    <AdminSidebar />
                </div>
                <div className='w-[85%]'>
                    <DashboardHero />
                    <AllUsers isTeam={isTeam}/>
                </div>
             </div>
        </AdminProtected>
    </div>
  )
}

export default page