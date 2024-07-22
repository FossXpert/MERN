'use client'
import React, { FC } from 'react'
import Profile from '../components/Profile/ProfileInfo';
import SideBarProfile from '../components/Profile/SideBarProfile';
import Header2 from '../components/Header2';
import { useSelector } from 'react-redux';


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
        <SideBarProfile
      
        />
    </div>
  )
}

export default page;