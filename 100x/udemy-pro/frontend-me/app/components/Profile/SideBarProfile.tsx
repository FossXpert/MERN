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
    Screen Size : `${sSize}`
    <div className='container'>
        <div className='box'>
        </div>
    </div>
    </>
  )
}

export default SideBarProfile