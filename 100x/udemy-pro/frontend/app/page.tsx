'use client'; // Writing this means the component wil be rendered on client Side
import React, { FC, useState } from 'react';
import Heading from './utills/Heading';
import Header from './components/Header';

interface Props{

}

const Page : FC<Props> = (props)=>{
  const [open,setOpen] = useState(false);
  const [activeItem,setActiveItems] = useState(0);

  return(
    <div>
      <Heading
      title='E-Learning' 
      description='E-Learning is a platform for students to learn and get help from teachers'
      keywords='Programming,MERN,Redux,Machine Learning, AI'/>
      <Header open={open} activeItem={activeItem} setOpen={setOpen}/>
    </div>
  )
};

export default Page;