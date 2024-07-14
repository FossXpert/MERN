import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { FC, useState } from 'react'
import '../../css/loginModal.css'
import { SiGnuprivacyguard } from 'react-icons/si';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaApple, FaGithub, FaGoogle } from 'react-icons/fa6';
import Link from 'next/link';

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
            <FaRegWindowClose className='icon1' onClick={handleClose}/>
            <h2>Sign up</h2>
          </div>
          <div className="signup-wrapper-2">
          <div className="text-box-label">
            <label htmlFor=''> Name</label>
            <input
            className='text-1'
            type='text'
            placeholder='Enter Your Name'
            name='name'
            id='name'
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
            <label htmlFor=''>Password</label>
            <input
            className='text-1'
            type='password'
            placeholder='Enter Your Password'
            name='password'
            id='password'
            />
            </div>
            <div className="text-box-label">
            <label htmlFor=''> Confirm Password</label>
            <input
            className='text-1'
            type='password'
            placeholder='Enter Confirm Password'
            name='cpassword'
            id='cpassword'
            />
            </div>
            <div className='button'>
            <button type='submit' className='submit'>Confirm</button>
            <button type='submit' className='cancel' onClick={handleClose}>Cancel</button>
            </div>
          </div>
          <div className='signup-wrapper-3-big'>
            Or, Sign Up With
          <div className='signup-wrapper-3'>
            <FaApple className='icon2'/>
            <FaGoogle className='icon2' />
            <FaGithub className='icon2' />
          </div>
          <div className='signup-wrapper-4'>
          Sign In?
          <Link href='#' className='link'>Click Me</Link>
          </div>
         </div>
        </Box>
      </Modal> 
    </div>
    </>
  )
}

export default LoginModal