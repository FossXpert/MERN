import React, { useState } from 'react'
import '../../../css/css-admin/courseinformation.css'
import { TextareaAutosize } from '@mui/material'

type Props = {}

const CourseInformation = (props: Props) => {

  const [dragged,setDragged]  = useState(false);

  const handleFormSubmit = () => {
    console.log("Clicked form")
  }
  const handleDragOver = () => {
    setDragged(true)
  }

  const handleDragLeave = () => {
    setDragged(false)
  }
  const handleDrop = (e:any) => {
    console.log("handle Drop");
    e.preventDefault();

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if(fileReader.readyState === 2) {
        const avatar = fileReader.result as string;
        console.log(avatar);
      }
    }
    fileReader.readAsDataURL(e.target.files[0])
  }
  return (
    <div className='course-information-container'>
        <h2>Course Information</h2>

        <div className='form'>
          <div className='group-1'>
            <label htmlFor=''>Course Name</label>
            <input
              className='input-box-1'
              type='text' 
              name='course-name' 
              placeholder='Please Enter Course Name' 
              required
            />
          </div>
          <div className='group-2'>
            <label htmlFor=''>Course Description</label>
            <textarea 
              name='course-description' 
              placeholder='Please Enter Course Description' 
              rows={10} 
              cols={117} 
              className='input-textarea-1'
            />
          </div>
          <div className='group-3'>
            <div className='group-3-1'>
              <label htmlFor=''>Course Price</label>
              <input
              className='input-box-1'
              type='text' 
              name='course-price' 
              placeholder='Please Enter Course Price' 
              required
            />
            </div>
            <div className='group-3-2'>
              <label htmlFor=''>Est. Price (optional)</label>
              <input
              className='input-box-1'
              type='text' 
              name='course-estimated-price' 
              placeholder='Please Enter Estimated Course Price' 
              required
            />
            </div>
          </div>
          <div className='group-4'>
          <label htmlFor=''>Course Tags</label>
            <textarea
              name='course-description' 
              placeholder='Please Enter Tags' 
              rows={6} 
              cols={117} 
              className='input-textarea-2'
            />
          </div>
          <div className='group-3'>
            <div className='group-3-1'>
              <label htmlFor=''>Course Level</label>
              <input
              className='input-box-1'
              type='text' 
              name='course-price' 
              placeholder='Please Enter Course Price' 
              required
            />
            </div>
            <div className='group-3-2'>
              <label htmlFor=''>Demo Url</label>
              <input
              className='input-box-1'
              type='text' 
              name='course-estimated-price' 
              placeholder='Please Enter Estimated Course Price' 
              required
            />
            </div>
          </div>
          <div draggable={true} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className='group-5'>
          <input className='hidden' name='file' type='file' accept='image/*' id=''/>
          <label className={`${dragged ? "bg-blue-500" : "bg-transparent"}`} htmlFor='file'>
            <span>Drag and drop an image here</span>
          </label>
          </div>
        </div>
    </div>
  )
}

export default CourseInformation