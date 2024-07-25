import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import '../../css/css-profile/changePassword.css'

type Props = {}

const ChangePassword = (props: Props) => {
    const {user} = useSelector((state:any) => state.auth);
  return (
    <>
    <div className="password-container">
        <div className="image-container">
            <Image
             className='myaccount-image' 
             src={user?.avatar?.url} 
             width={64} height={64} alt='No'/>
        </div>
        <h4></h4>
        
    </div>
    </>
  )
}

export default ChangePassword