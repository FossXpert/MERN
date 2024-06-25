'use client'
import Heading from '../../utills/Heading'
import AdminProtected from '../../hooks/adminProtected'
import React from 'react'
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar'
import DashboardHero from '../../components/Admin/DashboardHero'
import AllCourses from '../../components/Admin/Course/AllCourses'
import Categories from '../../components/Admin/Customization/EditCategories'
type Props = {}

const page = (props: Props) => {
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
                        <Categories/>
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default page