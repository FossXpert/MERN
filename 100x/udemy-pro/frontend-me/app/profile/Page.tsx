'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { useLoadUserQuery } from '../../redux/features/api/apiSlice';

type Props = {
}

const Page = (props: Props) => {
  const [open,setOpen] = useState(false);
  const [route,setRoute] = useState('signin');
  const {data,isLoading,error} = useLoadUserQuery({});

  useEffect(()=>{
    if(data){
      console.log(data);
    }
    if(error){
      throw error
    }
  },[data])
  
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