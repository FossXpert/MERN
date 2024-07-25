import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../css/css-profile/changePassword.css'

type Props = {}

const ChangePassword = (props: Props) => {
    const {user} = useSelector((state:any) => state.auth);
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');


  return (
    <>
    <div className="password-container">
        <div className="image-container">
            <Image
             className='myaccount-image' 
             src={user?.avatar?.url} 
             width={64} height={64} alt='No'/>
        </div>
        <p>Change Password</p>
        <div className='password-input'>
            <label htmlFor="oldpass">Enter Old Password</label>
            <input type='password'
            id='oldpass'
            name='oldpass'
            value={oldPassword}
            placeholder='Old Password'
            onChange={(e)=>setOldPassword(e.target.value)}
            />
            <input type='password'
            id='newpass'
            name='newpass'
            value={newPassword}
            placeholder='New Password'
            onChange={(e)=>setNewPassword(e.target.value)}
            />
            <input type='password'
            id='cpass'
            name='cpass'
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
        </div>
    </div>
    </>
  )
}

export default ChangePassword