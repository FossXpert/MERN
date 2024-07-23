'use client'
import React, { FC } from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
import Image from 'next/image'
type Props = {

 
}

const SideBarProfile:FC<Props> = () => {

  const {sSize} = useSelector((state:any)=>state.screen);
  const {user} = useSelector((state:any) => state.auth);
  const profileItems = ['My Acount','c']
  return (
    <>
    screen is {sSize}
    <div className='sidebar-container'>
        <div className='sidebar-box1'>
          <Image src={user?.avatar.url} width={59.33} height={59.33} alt='No'/>
          <p className='sidebar-box1-box'>{user.name}</p>  
        </div>
        <div className='sidebar-box2'>
          <p>Hi</p>
        </div>
    </div>
    </>
  )
}

export default SideBarProfile