import { Box, Modal, Typography } from '@mui/material';
import React, { FC, useState } from 'react'
import '../../css/loginModal.css'
import { SiGnuprivacyguard } from 'react-icons/si';
import { FaRegWindowClose } from 'react-icons/fa';

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
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="signup">
          <div className='signup-wrapper-1'>
            <SiGnuprivacyguard className='icon1'/>
            <FaRegWindowClose className='icon2' onClick={handleClose}/>
          </div>
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