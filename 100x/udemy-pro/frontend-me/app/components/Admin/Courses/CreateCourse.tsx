import React, { useState } from 'react'
import CourseOptions from './CourseOption'

type Props = {}

const CreateCourse = (props: Props) => {
  const [active,setActive] = useState(0);

  return (
    <div>
      <CourseOptions active={active} setActive={setActive}/>
    </div>
  )
}

export default CreateCourse