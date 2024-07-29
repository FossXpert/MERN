import React from 'react'
import AdminSidebar from './Sidebar/AdminSidebar'

import '../../css/css-admin/admin.css'
type Props = {}

const Admin = (props: Props) => {
  return (
    <div className='admin-container'>
        <AdminSidebar/>
        <div className='admin-container-mini'>
            <div className='admin-progressbar'>
                
            </div>
        </div>
    </div>
  )
}

export default Admin