import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const MyAccount = (props: Props) => {
    const {user} = useSelector((state:any) => state.auth)
  return (
    <div className='myaccount-container'>
        <Image src={user?.avatar?.url} alt='No'/>
    </div>
  )
}

export default MyAccount