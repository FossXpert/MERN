'use client'

import React, { FC } from 'react'
import Course from '../../components/All/Course'

type Props = {
  open : boolean;
  setOpen : (open:boolean) => void;
  route : string;
  setRoute : (route:string) => void;
}

const page:FC<Props> = ({open,setOpen,route,setRoute}) => {
  return (
    <div>
        <Course
          open={open}
          setOpen={setOpen}
          route={route}
          setRoute={setRoute}
        />
    </div>
  )
}

export default page