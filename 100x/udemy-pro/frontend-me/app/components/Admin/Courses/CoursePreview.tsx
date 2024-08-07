import React, { FC } from 'react'

type Props = {
  handleSubmit : any;
  createCourseFinal : any;
}

const CoursePreview:FC<Props> = ({handleSubmit,createCourseFinal}) => {

  return (
    <>
    <div className='flex'>
      <button type='submit' onClick={()=>handleSubmit()}>Submit</button>
      <button type='submit' onClick={()=>createCourseFinal()}>Create</button>
    </div>
    </>
  )
}

export default CoursePreview;
