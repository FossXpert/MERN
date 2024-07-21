import React, { FC } from 'react'
import '../../css/profile.css'

type Props = {
  openProfile : boolean;
  setOpenProfile : (openProfile : boolean) => void;
}

const Profile:FC<Props> = ({openProfile,setOpenProfile}) => {
  return (
    <>
    <div className="container">
      
    </div>
    </>
  )
}

export default Profile