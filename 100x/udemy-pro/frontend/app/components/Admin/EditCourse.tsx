'use client'
import Heading from '../../utills/Heading'
import React, { FC, useEffect, useState } from 'react'
import AdminSidebar from './Sidebar/AdminSidebar'
import DashboardHeader from './DashboardHeader'
import CourseInformation from './CourseInformation'
import CourseOptions from './CourseOptions'
import CourseData from './CourseData'
import CourseContent from './CourseContent'
import CoursePreview from './CoursePreview'
import { useCreateCourseMutation, useEditSingleCourseMutation, useGetAllCourseQuery } from '../../../redux/features/courses/coursesApi'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'
type Props = {
    id : string
}

const EditCourse: FC<Props> = ({id}) => {
    const [editSingleCourse,{isSuccess,error}] = useEditSingleCourseMutation();
    const { data,refetch } = useGetAllCourseQuery({},{refetchOnMountOrArgChange:true});
    const editCourseData = data && data.Allcourses.find((i:any) => i._id === id);
    const [active, setActive] = useState(0);

    useEffect(()=>{
        if(isSuccess){
            toast.success("Course Updated Successfully");
            redirect("/admin/courses")
        }
        if(error)
    })
    useEffect(()=>{
        if(editCourseData){
            setCourseInfo({
                name : editCourseData.name,
                description : editCourseData.description,
                price : editCourseData.price,
                estimatedPrice : editCourseData.estimatedPrice,
                tags : editCourseData.tags,
                level : editCourseData.level,
                demoUrl : editCourseData.demoUrl,
                thumbnail : editCourseData?.thumbnail?.url,
            })
            setBenefits(editCourseData.benefits);
            setPrerequisites(editCourseData.prerequisites);
            setCourseContentData(editCourseData.courseData);
        }
    },[editCourseData]);

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

    const [benefits, setBenefits] = useState([{ title: "" }]);
    const [prerequisites, setPrerequisites] = useState([{ title: "" }])
    const [courseContentData, setCourseContentData] = useState([{
        videoUrl: "",
        title: "",
        description: "",
        videoSection: "Untitled Section",
        links: [
            {
                title: "",
                url: ""
            },
        ],
        suggestion: "",
    }])

    const [courseData, setCourseData] = useState({});

    const handleSubmit = async () => {
        //We can't send all the data in single array
        //Format benefit array
        const formattedBenefit = benefits.map((benefit) => ({ title: benefit.title }));
        // Format prerequisites array
        const formattedPrerequisites = prerequisites.map((prerequisite) => ({ title: prerequisite.title }));

        //Format CourseContent Array
        const formattedCourseContent = courseContentData.map((courseContent) => ({
            videoUrl: courseContent.videoUrl,
            title: courseContent.title,
            description: courseContent.description,
            videoSection: courseContent.videoSection,
            links: courseContent.links.map((link) => ({
                title: link.title,
                url: link.url
            })),
            suggestion: courseContent.suggestion
        }));
        //prepare the data object to send to the server
        const data = {
            name: courseInfo.name,
            description: courseInfo.description,
            price: courseInfo.price,
            estimatedPrice: courseInfo.estimatedPrice,
            tags: courseInfo.tags,
            thumbnail: courseInfo.thumbnail,
            level: courseInfo.level,
            demoUrl: courseInfo.demoUrl,
            totalVideos: courseContentData.length,
            benefits: formattedBenefit,
            prerequisites: formattedPrerequisites,
            courseData: formattedCourseContent,
        }
        setCourseData(data);
        console.log("courseData is :", courseData);
    }

    const handleCourseCreate = async (e: any) => {
        const data = courseData;
        await editCourseData(data)
        console.log("New Course Data is : ",data);
    }


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
                            benefits={benefits}
                            setBenefits={setBenefits}
                            active={active}
                            setActive={setActive}
                            prerequisites={prerequisites}
                            setPrerequisites={setPrerequisites}
                        />
                    )
                }
                {
                    active === 2 && (
                        <CourseContent
                            active={active}
                            setActive={setActive}
                            courseContentData={courseContentData}
                            setCourseContentData={setCourseContentData}
                            handleSubmit={handleSubmit}
                        />
                    )

                }
                {
                    active === 3 && (
                        <CoursePreview
                            active={active}
                            setActive={setActive}
                            courseData={courseData}
                            handleCourseCreate={handleCourseCreate}
                            isEdit={true}
                        />
                    )
                }
            </div>
            <div className='w-[18%] mt-[100px] h-screen fixed z-[-1] top-18 right-4'>
                <CourseOptions active={active} setActive={setActive} />
            </div>
        </div>
    )
}

export default EditCourse;