import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../../css/css-profile/myaccount.css'
import { CiCamera } from 'react-icons/ci'
import { useUpdateUserInfoMutation } from '../../../redux/features/auth/authApi'

type Props = {}

const MyAccount = (props: Props) => {
    const {user} = useSelector((state:any) => state.auth);
    const [updateUserInfo,{isSuccess,error,data,isLoading}] = useUpdateUserInfoMutation();
    const [name,setName] = useState(user && user.name);


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await updateUserInfo(name);
            console.log(data)
        } catch (error) {
            throw error
        }
    }
    return (
    <div className='myaccount-container'>
        <div className="image-container">
            <Image
             className='myaccount-image' 
             src={user?.avatar?.url} 
             width={64} height={64} alt='No'/>
             <div className="camera-icon" onClick={() => console.log("hi")}>
                    <CiCamera />
             </div>
        </div>
        <div className='myaccount-text'>
            <form onSubmit={handleSubmit}>
            <div className='myaccount-text-1'>
                <label htmlFor="fullname">Full Name</label>
                <input type='text'
                className='input-field'
                value={name}
                name='fullname'
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='myaccount-text-1'>
                <label htmlFor="email">Email Address</label>
                <input type='text'
                readOnly
                className='input-field'
                value={user?.email}
                name='email'
                />
            </div>
                <input type='submit'
                className='button-global'
                name='submit'
                />
            </form>  
        </div>
    </div>
  )
}

export default MyAccount