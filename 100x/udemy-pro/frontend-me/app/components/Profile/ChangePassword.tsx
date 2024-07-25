import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../css/css-profile/changePassword.css'
import '../../css/css-profile/myaccount.css'


type Props = {}

const ChangePassword = (props: Props) => {
    const { user } = useSelector((state: any) => state.auth);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return (
        <>
            <div className="myaccount-container">
                <div className="image-container">
                    <Image
                        className='myaccount-image'
                        src={user?.avatar?.url}
                        width={64} height={64} alt='No' 
                    />
                </div>
                <p>Change Password</p>
                <div className='myaccount-text'>
                    <div className='myaccount-text-1'>
                        <label htmlFor="oldpass">Old Password</label>
                        <input type='password'
                            id='oldpass'
                            name='oldpass'
                            value={oldPassword}
                            placeholder='Old Password'
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className='myaccount-text-1'>
                        <label htmlFor="newpass">New Password</label>
                        <input type='password'
                            id='newpass'
                            name='newpass'
                            value={newPassword}
                            placeholder='New Password'
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className='myaccount-text-1'></div>
                    <label htmlFor="cpass">Confirm Password</label>
                    <input type='password'
                        id='cpass'
                        name='cpass'
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    </div>
            </div>
        </>
    )
}

export default ChangePassword