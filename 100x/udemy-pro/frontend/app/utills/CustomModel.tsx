import React, { Component, FC } from 'react'
import {Modal,Box} from '@mui/material'
import Login from '../components/Auth/Login';
type Props = {
    open:boolean;
    setOpen:(open:boolean)=> void;
    activeItem : any;
    component: any;
    setRoute : (route:string)=>void
}

const CustomModel:FC<Props> = ({open,setOpen,activeItem,component:Component,setRoute}) => {
  return (
    <div>
      <Modal
      open={open}
      onClose={()=>setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[12%] left-[50%] -translate-x-1/2 -traslate-y-1/2 w-[390px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
          <Component setRoute={setRoute}/> 
          {/* This is whenever we have to pass component as props */}
        </Box>
      </Modal>
    </div>
  )
}

export default CustomModel;