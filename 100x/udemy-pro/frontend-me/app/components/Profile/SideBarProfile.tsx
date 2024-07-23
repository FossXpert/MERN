'use client'
import React, { FC } from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
import Image from 'next/image'
type Props = {

 
}

const SideBarProfile:FC<Props> = () => {

  const {sSize} = useSelector((state:any)=>state.screen);
  const {user} = useSelector((state:any) => state.auth)
  return (
    <>
    screen is {sSize}
    <div className='sidebar-container'>
        <div className='sidebar-box'>
          Zoom
        </div>
        <div className='sidebar-box1'>
          <Image src={user?.avatar} width={59.33} height={59.33} alt='No'/>
          <h4 className='sidebar-box1-box'>{user.name}</h4>  
          <h5>{user.email}</h5>    
        </div>
    </div>
    </>
  )
}

export default SideBarProfile