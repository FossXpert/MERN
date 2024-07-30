import React, { FC } from 'react'

type Props = {
  active : number;
  setActive : (active : number) => void;
}

const CourseOptions:FC<Props> = ({active,setActive}) => {
  return (
    <div className='courseoption'>
        
    </div>
  )
}

export default CourseOptions