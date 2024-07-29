'use client'
import React from 'react'
import AdminSidebar from '../components/Admin/Sidebar/AdminSidebar'
import { useSelector } from 'react-redux'

type Props = {}

const page = () => {
  const {user} = useSelector((state:any) => state.auth);
  return (
    <div>
      <AdminSidebar user={user}/>
    </div>
  )
}

export default page