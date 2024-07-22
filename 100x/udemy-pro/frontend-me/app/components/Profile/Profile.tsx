import React, { FC } from 'react'
import '../../css/profile.css'
import { Drawer, makeStyles, Typography } from '@mui/material';

type Props = {
}

const useStyles = makeStyles({
  page : {
    background : '#f9f9f9',
    width : '100%'
  }
})

const Profile:FC<Props> = ({}) => {

  const classes = useStyles();''

  return (
    <>
    <div className="container">
        <Drawer
        className={classes}
        >
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