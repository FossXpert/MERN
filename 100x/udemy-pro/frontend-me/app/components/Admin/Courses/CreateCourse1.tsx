import React, { useState } from 'react'
import CourseStatusBar from './CourseStatusBar'
import '../../../css/css-admin/coursestatusbar.css'
import '../../../css/css-admin/createcourse.css'
import CourseInformation from './CourseInformation';
import CourseOptions from './CourseOptions';
import CourseContent from './CourseContent';
import CoursePreview from './CoursePreview';
import { zodCourseBenefit, zodCourseInfo, zodCoursePrerequisite } from './CourseZodSchema';
type Props = {}

const CreateCourse1 = (props: Props) => {
  const [active, setActive] = useState(0);
 
  const [courseInfo, setCourseInfo] = useState<zodCourseInfo>({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });

  return (
    <div>
      
    </div>
  )
}

export default CreateCourse1