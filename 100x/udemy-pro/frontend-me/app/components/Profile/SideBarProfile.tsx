'use client'
import React, { FC } from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
type Props = {
    
    sSize : string;
    isMobile : boolean;
}

const SideBarProfile:FC<Props> = ({sSize,isMobile}) => {
    console.log(isMobile,sSize);
  return (
    <>
    Screen Size : {sSize}
    <div className='sidebar-container'>
        <div className='box'>
        </div>
    </div>
    </>
  )
}

export default SideBarProfile