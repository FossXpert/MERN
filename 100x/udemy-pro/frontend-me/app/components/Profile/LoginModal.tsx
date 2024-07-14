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
            <FaRegWindowClose className='icon2' onClick={handleClose}/>
            <h2>Sign up</h2>
          </div>
          <div className="signup-wrapper-2">
            <div className="text-box-label">
            <label htmlFor=''>Email</label>
            <input
            className='text-1'
            type='email'
            placeholder='Enter Your Email'
            name='email'
            />
            </div>
            <div className="text-box-label">
            <label htmlFor=''>Email</label>
            <input
            className='text-1'
            type='email'
            placeholder='Enter Your Email'
            name='email'
            />
            </div>
            <div className="text-box-label">
            <label htmlFor=''>Email</label>
            <input
            className='text-1'
            type='email'
            placeholder='Enter Your Email'
            name='email'
            />
            </div>
          </div>
        </Box>
      </Modal> 
    </div>
    </>
  )
}

export default LoginModal