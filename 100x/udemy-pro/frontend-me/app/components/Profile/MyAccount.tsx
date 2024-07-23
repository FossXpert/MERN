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
                <label htmlFor="fullname">Full Name</label>
                <input type='text'
                className='input-field'
                value={user?.name}
                name='fullname'
                />
            </form>        
        </div>
        
    </div>
  )
}

export default MyAccount