import Image from 'next/image';
import React, { useState } from 'react'
import profileImage from '../../../assets/thumnail.png'
import '../../../css/css-admin/adminSidebar.css'
import { MdDashboard } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
type Props = {}

const AdminSidebar = (props: Props) => {

    const [toggle,setToggle] = useState(false);
    
    const handleToggle = () =>{
        setToggle(!toggle);
    }

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
                <li className='active'>
                  <a href='#'>
                    <MdDashboard className="icon"/>
                    <span className='as-span-text'>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <MdDashboard className="icon"/>
                    <span className='as-span-text'>Audience</span>
                    { toggle? (<IoIosArrowUp/>):
                        (<IoIosArrowDown className='arrow' onClick={handleToggle} />)}
                  </a>
                  <ul className={toggle ? 'assub-menu' : 'disabled'}>
                    <li>
                      <a href='#'>
                        <MdDashboard className="icon"/>
                        <span className='as-span-text'>Users</span>
                      </a>
                    </li>
                    <li> 
                      <a href='#'>
                        <MdDashboard className="icon"/>
                        <span className='as-span-text'>Subscribers</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=''>
                  <a href='#'>
                    <MdDashboard className="icon"/>
                    <span className='as-span-text'>Post</span>
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    <MdDashboard className="icon"/>
                    <span className='as-span-text'>Post</span>
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    <MdDashboard className="icon"/>
                    <span className='as-span-text'>Income</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <MdDashboard className="icon"/>
                    <span className='as-span-text'>Audience</span>
                    <IoIosArrowDown className='arrow'/>
                  </a>
                  <ul className='assub-menu'>
                    <li>
                      <a href='#'>
                        <MdDashboard className="icon"/>
                        <span className='as-span-text'>Users</span>
                      </a>
                    </li>
                    <li> 
                      <a href='#'>
                        <MdDashboard className="icon"/>
                        <span className='as-span-text'>Subscribers</span>
                      </a>
                    </li>
                  </ul>
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