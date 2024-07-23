import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import '../../css/css-profile/myaccount.css'
import { CiCamera } from 'react-icons/ci'

type Props = {}

const MyAccount = (props: Props) => {
    const {user} = useSelector((state:any) => state.auth)
  return (
    <div className='myaccount-container'>
        <div className="image-container">
            <Image className='myaccount-image' src={user?.avatar?.url} width={64} height={64} alt='No'/>
            <CiCamera onClick={()=>console.log("hi")}/>
        </div>
        
    </div>
  )
}

export default MyAccount