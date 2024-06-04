'use client'; // Writing this means the component wil be rendered on client Side
import React, { FC, useState } from 'react';
import Heading from './utills/Heading';
import Header from './components/Header';
import Hero from './components/Route/Hero';

interface Props{

}

const Page : FC<Props> = (props)=>{
  const [open,setOpen] = useState(false);
  const [activeItem,setActiveItems] = useState(0);
  const [route,setRoute] = useState('signin')

  return(
    <div>
      <Heading
      title='E-Learning' 
      description='E-Learning is a platform for students to learn and get help from teachers'
      keywords='Programming,MERN,Redux,Machine Learning, AI'/>
      <Header open={open} activeItem={activeItem} setOpen={setOpen} route={route} setRoute={setRoute}/>
      <Hero/>
    </div>
  )
};

export default Page;