import React from 'react'

type Props = {}

const CourseOptions = (props: Props) => {
  return (
    <>
    <div className='w-full flex flex-col items-center justify-center'>
        <h2>Course Information</h2>
        <div className=''>
            <label htmlFor=''>What are the benefits for the student in this course</label>
            <input
              className=''
              type='text' 
              name='course-name' 
              placeholder='Please Enter Course Name' 
              required
            />
        </div>
    </div>
    </>
  )
}

export default CourseOptions