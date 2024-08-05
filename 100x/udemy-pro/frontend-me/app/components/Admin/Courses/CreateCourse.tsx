import React, { useState } from 'react'
import CourseStatusBar from './CourseStatusBar'
import '../../../css/css-admin/coursestatusbar.css'
import '../../../css/css-admin/createcourse.css'
import CourseInformation from './CourseInformation';
import CourseOptions from './CourseOptions';
import CourseContent from './CourseContent';
import CoursePreview from './CoursePreview';
import { z } from 'zod';
type Props = {}

const CreateCourse = (props: Props) => {
  const [active, setActive] = useState(0);

  const [benefits,setBenefits] = useState([{title : ""}]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }])

  const [courseContentData,setCourseContentData] = useState([
    {
        videoSection: "Untitled Section",
        courseDataInside : [{
          videoUrl: "",
          title: "",
          description: "",
        }],
        suggestion: "",
    }
  ]);

  return (
    <>
    <div className='create-course-container'>
      <div className='coursestatus'>
        <CourseStatusBar active={active} setActive={setActive} />
      </div>
      <div className='create-course-container-secondary'>
          {active ===1 && <CourseInformation active={active} setActive={setActive}/>}
          {active ===2 && <CourseOptions active={active} setActive={setActive} 
            benefits={benefits} setBenefits={setBenefits} 
            prerequisites={prerequisites} setPrerequisites={setPrerequisites} />}
          {active ===3 && <CourseContent setCourseContentData={setCourseContentData} courseContentData={courseContentData} active={active} setActive={setActive}/>}
          {active ===4 && <CoursePreview/>}
      </div>
    </div>
    </>
  )
}

export default CreateCourse