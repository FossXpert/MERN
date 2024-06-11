'use client'
import Heading from '../utills/Heading'
import Protected from '../hooks/useProtected'
import React, { FC, useState } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile/Profile'
import { useSelector } from 'react-redux'

type Props = {}

const page: FC<Props> = (props) => {

  const [open,setOpen] = useState(false);
  const [activeItem,setActiveItems] = useState(0);
  const [route,setRoute] = useState('signin');
  const {user} = useSelector((state:any)=>state.auth)

  return (
    <div>
      <Protected>
          <Heading
          title={`${user.name}`} 
          description='E-Learning is a platform for students to learn and get help from teachers'
          keywords='Programming,MERN,Redux,Machine Learning, AI'
          />
          <Header
           open={open} 
           activeItem={activeItem} 
           setOpen={setOpen} route={route} 
           setRoute={setRoute}
          />
          <Profile/>
      </Protected>
    </div>
  )
}

export default page;
