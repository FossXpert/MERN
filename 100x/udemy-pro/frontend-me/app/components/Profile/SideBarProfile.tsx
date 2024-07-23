'use client'
import React, { FC } from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { MdAccountCircle, MdHome, MdLogout } from 'react-icons/md'
import { IoBagCheck } from 'react-icons/io5'
import { RiAdminLine, RiLockPasswordFill } from 'react-icons/ri'
type Props = {

 
}

const SideBarProfile:FC<Props> = () => {

  const {sSize} = useSelector((state:any)=>state.screen);
  const {user} = useSelector((state:any) => state.auth);
  return (
    <>
    screen is {sSize}
    <div className='sidebar-container'>
        <div className='sidebar-box1'>
          <Image src={user?.avatar?.url} width={59.33} height={59.33} alt='No'/>
          <p className='sidebar-box1-box'>{user.name}</p>  
        </div>
        <div className='sidebar-box2'>
          {
            <div className='sidebar-options'>
              <div className='sidebar-icon-box'>
                <MdHome className='sidebar-icons'/>
              </div>
            <p className='sidebar-text'>My Account</p>
            </div>
          }
          {
            <div className='sidebar-options'>
              <div className='sidebar-icon-box'>
                <IoBagCheck className='sidebar-icons'/>
              </div>
            <p className='sidebar-text'>Enrolled Courses</p>
            </div>
          }
          {
            <div className='sidebar-options'>
              <div className='sidebar-icon-box'>
                <RiLockPasswordFill className='sidebar-icons'/>
              </div>
            <p className='sidebar-text'>Change Password</p>
            </div>
          }
          {
           user?.role === 'admin' && (<div className='sidebar-options'>
              <div className='sidebar-icon-box'>
                <RiAdminLine className='sidebar-icons'/>
              </div>
            <p className='sidebar-text'>Admin Dashboard</p>
            </div>)
          }
          {
            <div className='sidebar-options'>
              <div className='sidebar-icon-box'>
                <MdLogout className='sidebar-icons'/>
              </div>
            <p className='sidebar-text'>Logout</p>
            </div>
          }
        </div>
    </div>
    </>
  )
}

export default SideBarProfile