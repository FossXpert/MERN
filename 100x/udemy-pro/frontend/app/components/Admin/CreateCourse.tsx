'use client'
import Heading from '../../utills/Heading'
import React, { useState } from 'react'
import AdminSidebar from './Sidebar/AdminSidebar'
import DashboardHeader from './DashboardHeader'
import CourseInformation from './CourseInformation'
import CourseOptions from './CourseOptions'
import CourseData from './CourseData'

type Props = {}

const CreateCourse = (props: Props) => {
    const [active, setActive] = useState(0);
    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnail: "",
    });

    const [benefits, setBenefits] = useState({ title: "" });
    const [preQuisites, setPrequisites] = useState({ title: "" })
    const [courseContentData, setCourseContentData] = useState([{
        videoUrl: "",
        title: "",
        description: "",
        videSection: "Untitled Section",
        links: [
            {
                title: "",
                url: ""
            },
        ],
        suggestion: "",
    }])

    const [courseData,setCourseData] = useState({});

    return (
        <div className='w-full flex min-h-screen'>
            <div className='w-[80%]'>
                {
                    active === 0 && (
                        <CourseInformation
                            courseInfo={courseInfo}
                            setCourseInfo={setCourseInfo}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }
                {
                    active === 1 && (
                        <CourseData
                            courseInfo={courseInfo}
                            setCourseInfo={setCourseInfo}
                            active={active}
                            setActive={setActive}
                        />
                    )
                }
            </div>
            <div className='w-[18%] mt-[100px] h-screen fixed z-[-1] top-18 right-4'>
                 <CourseOptions active={active} setActive={setActive}/>          
            </div>
        </div>
    )
}

export default CreateCourse