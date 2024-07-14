import { Box, Modal, Typography } from '@mui/material';
import React, { FC, useState } from 'react'
import '../../css/loginModal.css'

type Props = {
  open : boolean;
  setOpen : (open : boolean) => void;
}

const LoginModal:FC<Props> = ({open,setOpen}) => {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
    <div className='loginModalBox'>
      <Modal open={open} onClose={handleClose}>
        <Box className="loginModalBox">
          <Typography>
            hi
          </Typography>
        </Box>
      </Modal> 
    </div>
    </>
  )
}

export default LoginModal