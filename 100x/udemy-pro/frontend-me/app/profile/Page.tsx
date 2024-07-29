'use client'
import React, { FC } from 'react'
import SideBarProfile from '../components/Profile/SideBarProfile';
import Header2 from '../components/Header2';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile/Profile';


type Props = {
  open : boolean;
  setOpen : (open:boolean) => void;
  route : string;
  setRoute : (route:string) => void;
  isMobile :boolean;
  sSize : string;
}
const page:FC<Props> =({open,setOpen,route,setRoute,sSize,isMobile}) => {
  return (
    <div>
     <Profile/>
    </div>
  )
}

export default page;