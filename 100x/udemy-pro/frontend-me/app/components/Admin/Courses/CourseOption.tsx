import React, { FC } from 'react'
import '../../../css/css-admin/courseoption.css'
type Props = {
  active : number;
  setActive : (active : number) => void;
}

const CourseOptions:FC<Props> = ({active,setActive}) => {
  return (
    <div className='courseoption'>
        hi
    </div>
  )
}

export default CourseOptions