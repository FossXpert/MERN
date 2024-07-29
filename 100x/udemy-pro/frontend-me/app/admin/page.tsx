'use client'
import React from 'react'
import AdminSidebar from '../components/Admin/Sidebar/AdminSidebar'
import { useSelector } from 'react-redux'
import Admin from '../components/Admin/Admin'
import Header2 from '../components/Header2'

type Props = {}

const page = () => {
  return (
    <div>
      <Admin/>
    </div>
  )
}

export default page