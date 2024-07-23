import React, { useState } from 'react'
import SideBarProfile from './SideBarProfile'
import '../../css/css-profile/profile.css'
import MyAccount from './MyAccount'
import EnrolledCourses from './EnrolledCourses'
import ChangePassword from './ChangePassword'
import AdminDashboard from './AdminDashboard'
type Props = {}

const Profile = (props: Props) => {
    const [active,setActive] = useState(0);

  return (
    <>
    <div className='profile-container-main'>
    <SideBarProfile active={active} setActive={setActive}/>
    <div className='profile-container'>
        <div className='profile-container-mini'>
            {
                active === 1 && <MyAccount/>
            }
            {
                active === 2 && <EnrolledCourses/>
            }
            {
                active === 3 && <ChangePassword/>
            }
            {
                active === 4 && <AdminDashboard/>
            }
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Profile