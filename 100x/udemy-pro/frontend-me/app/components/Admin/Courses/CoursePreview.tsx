import React, { FC } from 'react'

type Props = {
  handleSubmit : any;
  createCourseFinal : any;
}

const CoursePreview:FC<Props> = ({handleSubmit,createCourseFinal}) => {

  return (
    <>
    <button type='submit' onClick={()=>handleSubmit()}>Submit</button>
    <button type='submit' onClick={()=>createCourseFinal()}>Create</button>
    <div className='flex flex-col h-full w-full items-center 
                    border border-solid border-black'>

    </div>
    </>
  )
}

export default CoursePreview;
