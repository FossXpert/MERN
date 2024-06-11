import Heading from '../../utills/Heading'
import Protected from '../hooks/useProtected'
import React, { FC, useState } from 'react'
import Header from '../../components/Header'
type Props = {}

const page: FC<Props> = (props:Props) => {

    const [open,setOpen] = useState(false);
  const [activeItem,setActiveItems] = useState(0);
  const [route,setRoute] = useState('signin')
  return (
    <div>
        <Protected>
        <Heading
      title='E-Learning' 
      description='E-Learning is a platform for students to learn and get help from teachers'
      keywords='Programming,MERN,Redux,Machine Learning, AI'/>
      <Header open={open} activeItem={activeItem} setOpen={setOpen} route={route} setRoute={setRoute}/>
        </Protected>
    </div>
  )
}

