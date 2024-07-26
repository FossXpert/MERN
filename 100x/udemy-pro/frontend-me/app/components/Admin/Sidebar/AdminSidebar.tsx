import Image from 'next/image';
import React from 'react'
import profileImage from '../../../assets/thumnail.png'
import '../../../css/css-admin/adminSidebar.css'
import { MdDashboard } from 'react-icons/md';
type Props = {}

const AdminSidebar = (props: Props) => {
  return (
    <>
      <div className="ascontainer">
        <div className="assidebar">
          <div className="ashead">
            <div className="asuser-image">
              <Image width={30} src={profileImage} alt='No'/>
            </div>
            <div className="asuser-details">
              <p className='astitle'>Web Developer</p>
              <p className='asname'>Rahul Rai</p>
            </div>
          </div>
          <div className="asnav">
            <div className="asmenu">
              <p className='astitle'>Main</p>
              <ul>
                <li>
                  <a href='#'>
                    <MdDashboard className="icon"/>
                    <span className='text'>Dashboard</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default AdminSidebar;