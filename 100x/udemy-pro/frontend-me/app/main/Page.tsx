'use client'
import React, { useEffect, useState } from 'react'
import Header2 from '../components/Header2';
import { useLoadUserQuery } from '../../redux/features/api/apiSlice';

type Props = {
}

const Page = (props: Props) => {
  const [open,setOpen] = useState(false);
  const [route,setRoute] = useState('signin');
  
  return (
    <div>
      <Header2
      open={open}
      setOpen={setOpen}
      route={route}
      setRoute={setRoute}
      />
    </div>
  )
}

export default Page