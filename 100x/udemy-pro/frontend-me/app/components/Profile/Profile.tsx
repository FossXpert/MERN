import React, { FC } from 'react'
import '../../css/profile.css'
import { Drawer, Typography } from '@mui/material';

type Props = {
}

const Profile:FC<Props> = ({}) => {
  return (
    <>
    <div className="container">
        <Drawer variant='permanent'>
          <div>
            <Typography variant='h5'>
                Hello World
            </Typography>
          </div>
        </Drawer>
    </div>
    </>
  )
}

export default Profile