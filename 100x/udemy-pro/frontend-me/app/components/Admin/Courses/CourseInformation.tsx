import React from 'react'
import '../../../css/css-admin/courseinformation.css'
import { TextareaAutosize } from '@mui/material'

type Props = {}

const CourseInformation = (props: Props) => {
  const handleFormSubmit = () => {
    console.log("Clicked form")
  }
  return (
    <div className='course-information-container'>
        <h2>Course Information</h2>

        <div className='form'>
          <div className='group-1'>
            <label htmlFor=''>Course Name</label>
            <input className='input-box-1' type='text'/>
          </div>
          <div className='group-2'>
            <label htmlFor=''>Course Description</label>
            <textarea rows={10} cols={117} className='input-textarea-1'/>
          </div>
        </div>
    </div>
  )
}

export default CourseInformation