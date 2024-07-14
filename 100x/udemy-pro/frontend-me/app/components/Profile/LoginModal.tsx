import { Box, Modal, TextField, Typography } from '@mui/material';
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
            <h2>Sign up</h2>
          </div>
          <div className="signup-wrapper-2">
            <label htmlFor=''>Name</label>
            <TextField
            className='text-1'
            label="Email"
            type='email'
            placeholder='Enter Your Email'
            />
          </div>
        </Box>
      </Modal> 
    </div>
    </>
  )
}

export default LoginModal