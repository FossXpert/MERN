'use client'
import React, { useState } from 'react'
import Header from '../components/Header';

type Props = {
}

const Page = (props: Props) => {
  const [open,setOpen] = useState(false);
  const [route,setRoute] = useState('signin');
  
  

  return (
    <div>
      <Header
      open={open}
      setOpen={setOpen}
      route={route}
      setRoute={setRoute}
      />
    </div>
  )
}

export default Page