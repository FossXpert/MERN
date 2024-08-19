'use client'
import CoursePreview from '../../../../app/components/All/CoursePreview';
import React from 'react'
import toast from 'react-hot-toast';

type Props = {}

const page = ({params}:any) => {

    const id = params.id;
  return (
    <div>
        <CoursePreview id={id}/>
    </div>
  )
}

export default page