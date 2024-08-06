import React, { FC } from 'react'

type Props = {
  handleSubmit : any
}

const CoursePreview:FC<Props> = ({handleSubmit}) => {

  return (
    <div>
      <button type='submit' onClick={()=>handleSubmit()}>Submit</button>
    </div>
  )
}

export default CoursePreview