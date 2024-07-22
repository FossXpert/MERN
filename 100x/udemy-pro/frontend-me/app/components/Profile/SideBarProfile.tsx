'use client'
import React, { FC } from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
type Props = {

    sSize : string;
    isMobile : boolean;
    user :any;
}

const SideBarProfile:FC<Props> = ({sSize,isMobile,user}) => {
    console.log(isMobile,sSize,user);
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