'use client'
import React, { FC } from 'react'
import Heading from '../../utills/Heading'
import Header from '../../components/Header'
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar'
import AdminProtected from '../../hooks/adminProtected'
import DashboardHero from '../../components/Admin/DashboardHero'
import EditHero from '../../components/Admin/Customization/EditHero'
import EditFaq from '../../components/Admin/Customization/EditFaq'

type Props = {}
 
 const page:FC<Props> = (props: Props) => {
   return (
     <div>
        <AdminProtected>
        <Heading 
        title='Admin-Dashboard' 
        description='Admin DashBoard For Udemy Pro Course selling app'
        keywords='admin,course,coursesellingapp'/>
        
        <div className='flex h-[200vh]'>
            <div className='1500px:w-[16%] w-1/5'
        >
            <AdminSidebar/>
            </div>
            <div className='w-[85%]'>
              <DashboardHero/>
              <EditFaq/>
            </div> 
        </div>
        </AdminProtected>
        
     </div>
   )
 }

 export default page;