import Image from 'next/image';
import React, { FC } from 'react'

type Props = {
    user : any;
    active : number;
    avatar:string | null;
    setActive : (active : number)=> void;
    logOutHandler : any;
}

const SideBarProfile:FC<Props> = ({active,setActive,avatar,user,logOutHandler}) => {
  return (
    <div className='w-full'>
        <div className={`w-full flex items-center px-3 py-4 cursor-pointer ${active ===1 ? "bg-slate-800":"bg-transparent"} `}
        onClick={()=>setActive(1)}>
        <Image
        alt=''
        src={avatar?avatar:"profile-pic.png"}/>
        </div>
    </div>
  )
}

export default SideBarProfile;