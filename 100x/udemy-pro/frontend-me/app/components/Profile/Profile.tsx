import React, { FC } from 'react'

type Props = {
  openProfile : boolean;
  setOpenProfile : (openProfile : boolean) => void;
}

const Profile:FC<Props> = ({openProfile,setOpenProfile}) => {
  return (
    <div>Profile</div>
  )
}

export default Profile