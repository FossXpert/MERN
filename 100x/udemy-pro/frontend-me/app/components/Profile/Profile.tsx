import React, { useState } from 'react'
import SideBarProfile from './SideBarProfile'
import '../../css/profile.css'
import MyAccount from './MyAccount'
type Props = {}

const Profile = (props: Props) => {
    const [active,setActive] = useState(0);

  return (
    <>
    <div className='profile-container-main'>
    <SideBarProfile active={active} setActive={setActive}/>
    <div className='profile-container'>
        {
            active === 1 && <MyAccount/>
        }
        {
            active === 2 && <MyAccount/>
        }
        {
            active === 3 
        }
    </div>
    </div>
    </>
    
  )
}

export default Profile