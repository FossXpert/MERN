import React from 'react'
import SideBarProfile from './SideBarProfile'
import '../../css/profile.css'
type Props = {}

const Profile = (props: Props) => {
  return (
    <>
    <div className='profile-container-main'>
    <SideBarProfile/>
    <div className='profile-container'>
        
    </div>
    </div>
    </>
    
  )
}

export default Profile