'use client'
import React, { FC } from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
type Props = {

    sSize : string;
    isMobile : boolean;
}

const SideBarProfile:FC<Props> = ({sSize,isMobile}) => {
  return (
    <>
    <div className='sidebar-container'>
        <div className='box'>
        </div>
    </div>
    </>
  )
}

export default SideBarProfile