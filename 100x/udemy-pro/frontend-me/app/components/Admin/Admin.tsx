import React from 'react'
import AdminSidebar from './Sidebar/AdminSidebar'

import '../../css/css-admin/admin.css'
import CreateCourse from './Courses/CreateCourse'
import { useRouter } from 'next/router'
type Props = {}

const Admin = (props: Props) => {

  const router = useRouter();

  return (
    <div className='admin-container'>
        <AdminSidebar/>
        <div className='admin-container-mini'>
              {
                
              }
        </div>
    </div>
  )
}

export default Admin