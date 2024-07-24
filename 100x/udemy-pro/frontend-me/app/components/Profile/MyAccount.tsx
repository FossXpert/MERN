import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import '../../css/css-profile/myaccount.css'
import { CiCamera } from 'react-icons/ci'

type Props = {}

const MyAccount = (props: Props) => {
    const {user} = useSelector((state:any) => state.auth)
    
    const handleSubmit = () => {

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
                value={user?.name}
                name='fullname'
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