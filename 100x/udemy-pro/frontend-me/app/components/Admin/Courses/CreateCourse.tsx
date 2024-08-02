import React, { useState } from 'react'
import CourseStatusBar from './CourseStatusBar'
import '../../../css/css-admin/coursestatusbar.css'
import '../../../css/css-admin/createcourse.css'
import CourseInformation from './CourseInformation';
import CourseOptions from './CourseOptions';
import CourseContent from './CourseContent';
import CoursePreview from './CoursePreview';
type Props = {}

const CreateCourse = (props: Props) => {
  const [active, setActive] = useState(0);

  return (
    <>
    <div className='create-course-container'>
      <div className='coursestatus'>
        <CourseStatusBar active={active} setActive={setActive} />
      </div>
      <div className='create-course-container-secondary'>
          {active ===1 && <CourseInformation active={active} setActive={setActive}/>}
          {active ===2 && <CourseOptions active={active} setActive={setActive}/>}
          {active ===3 && <CourseContent/>}
          {active ===4 && <CoursePreview/>}
      </div>
    </div>
    </>
  )
}

export default CreateCourse