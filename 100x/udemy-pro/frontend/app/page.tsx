'use client'; // Writing this means the component wil be rendered on client Side
import React, { FC } from 'react';
import Heading from './utills/Heading';

interface Props{

}

const Page : FC<Props> = (props)=>{

  return(
    <div>
      <Heading
      title='E-Learning' 
      description='E-Learning is a platform for students to learn and get help from teachers'
      keywords='Programming,MERN,Redux,Machine Learning, AI'/>
    </div>
  )
};

export default Page;