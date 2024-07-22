'use client'
import React, { FC } from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
type Props = {

 
}

const SideBarProfile:FC<Props> = () => {

  const {sSize} = useSelector((state:any)=>state.screen)

  return (
    <>
    screen is {sSize}
    <div className='sidebar-container'>
        <div className='box'>
          Zoom
        </div>
    </div>
    </>
  )
}

export default SideBarProfile