'use client'
import React from 'react'
import '../../css/sidebarProfile.css'
import { useSelector } from 'react-redux'
type Props = {}

const SideBarProfile = (props: Props) => {
    const {isMobile,sSize} = useSelector((state:any)=>state.screen);
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