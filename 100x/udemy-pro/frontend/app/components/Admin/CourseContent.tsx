import { styles } from '../../styles/style';
import React, { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs'
import { BsLink45Deg } from 'react-icons/bs'

type Props = {
    active: number;
    setActive: (active: number) => void;
    courseContentData: any;
    setCourseContentData: (courseContentData: any) => void;
    handleSubmit: any;
}

const CourseContent: FC<Props> = ({ courseContentData, setCourseContentData, active, setActive, handleSubmit: handleCourseSubmit }) => {

    const [isCollapsed, setIsCollapsed] = useState(Array(courseContentData.length).fill(false));
    const [activeSection, setActiveSection] = useState(1);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    }
    const handleCollapseToggle = async (index: number) => {
        const updatedCollapsed = [...isCollapsed];
        updatedCollapsed[index] = !updatedCollapsed[index]
        setIsCollapsed(updatedCollapsed);
    }

    const handleRemoveLink = async (index: number, linkIndex: number) => {
        const updatedData = [...courseContentData];
        updatedData[index].links.splice(linkIndex, 1);
    }

    const handleAddLink = async (index: number) => {
        const updatedData = [...courseContentData];
        updatedData[index].links.push({ title: "", url: "" });
        setCourseContentData(updatedData);
    }

    const newContentHandler = (item: any) => {
        if (item.title === "" || item.description === "" || item.videoUrl === "" || item.links[0].title === "" || item.links[0].url === "") {
            toast.error("Please Fill all the required fields")
        } else {
            let newVideoSection = "";
            if (courseContentData.length > 0) {
                const lastVideoSection = courseContentData[courseContentData.length - 1].videoSection;
                //use the last- video section if available else use user Input
                if (lastVideoSection) {
                    newVideoSection = lastVideoSection;
                }
            }
            const newContent = {
                videoUrl: "",
                title: "",
                description: "",
                videoSection: newVideoSection,
                links: [{ title: "", url: "" }]
            };
            setCourseContentData([...courseContentData, newContent]);
        }
    }

    const addNewSection = async () => {
        if (courseContentData[courseContentData.length - 1].title === "" ||
            courseContentData[courseContentData.length - 1].description === "" ||
            courseContentData[courseContentData.length - 1].videoUrl === "" ||
            courseContentData[courseContentData.length - 1].links[0].title === "" ||
            courseContentData[courseContentData.length - 1].links[0].url === ""
        ) {
            toast.error("Please Fill all the required fields")
        } else {
            setActiveSection(activeSection + 1);
            const newContent = {
                videoUrl: "",
                title: "",
                description: "",
                videoSection: `Untitled Section ${activeSection}`,
                links: [{ title: "", url: "" }]
            };
            setCourseContentData([...courseContentData, newContent]);
        }
    }

    const prevButton = async () => {
        setActive(active - 1);
    }

    const handleOptions = async () => {
        if (courseContentData[courseContentData.length - 1].title === "" &&
            courseContentData[courseContentData.length - 1].description === "" &&
            courseContentData[courseContentData.length - 1].videoUrl === "" &&
            courseContentData[courseContentData.length - 1].links[0].title === "" &&
            courseContentData[courseContentData.length - 1].links[0].url === ""
        ) {
            toast.error("Section Can't be empty")
        } else {
            setActiveSection(activeSection + 1);
            handleCourseSubmit();
            setActive(active + 1)
        }
    }

    const handleVideoSection = (index: number, value: any) => {
        const updatedData = courseContentData.map((content: any, i: any) => {
            if (i === index) {
                return { ...content, videoSection: value }
            }
        })
        setCourseContentData(updatedData);

    }
    const handleVideoTitle = async (index: number, value: any) => {
        // const updatedData = [...courseContentData];
        // updatedData[index].title = e.target.value;
        // setCourseContentData(updatedData);
        const updatedData = courseContentData.map((content : any, i : any) => {
            if(index === i){
                return {...content,title:value}
            }
        })
        setCourseContentData(updatedData);
    }
    const handleVideoUrl = async (index: number, value: any) => {
        const updatedData = courseContentData.map((content : any, i : any) => {
            if(index === i){
                return {...content,videoUrl:value}
            }
        })
        setCourseContentData(updatedData);
    }
    const handleVideoDescription = async (index: number, value: any) => {
        const updatedData = courseContentData.map((content : any, i : any) => {
            if(index === i){
                return {...content,description:value}
            }
        })
        setCourseContentData(updatedData);
    }
    const handleVideoAddLink = (index:number,linkIndex: number,value:any) => {
        // const updatedData = [...courseContentData];
        // updatedData[index].links[linkIndex].title = e.target.value;
        // setCourseContentData(updatedData);
            const updatedData = courseContentData.map((item:any, i:any) => {
              if (i === index) {
                return {
                 ...item,
                  links: item.links.map((link:any, linkI:any) => {
                    if (linkI === linkIndex) {
                      return {...link, title: value };
                    }
                    return link;
                  }),
                };
              }
              return item;
            });
            setCourseContentData(updatedData);
    }


    return (
        <div className='w-[80%] m-auto mt-24 p-3'>
            <form onSubmit={handleSubmit}>
                {
                    courseContentData.map((item: any, index: number) => {

                        const showSectionInput = index === 0 || item.videoSection !== courseContentData[index - 1].videoSection;
                        return (
                            <>
                                <div className={`w-full bg-[#cdc8c817] p-4
                                 ${showSectionInput ? "mt-10" : "mb-0"
                                    }`}>
                                    {
                                        showSectionInput && (
                                            <>
                                                <div className='flex w-full items-center'>
                                                    <input
                                                        type='text'
                                                        className={`text-[20px] ${item.videoSection === "Untitled Section"
                                                            ? "w-[170px]"
                                                            : "w-min"
                                                            } font-Poppins cursor-pointer dark:text-white text-black bg-transparent outline-none`}
                                                        value={item.videoSection}
                                                        onChange={(e) => handleVideoSection(index, e.target.value)}
                                                    />
                                                    <BsPencil className='cursor-pointer dark:text-white text-black' />
                                                </div><br />
                                            </>
                                        )
                                    }
                                    <div className='flex w-full items-center justify-between my-0'>
                                        {isCollapsed[index] ? (
                                            <>
                                                {item.title ? (
                                                    <p className='font-Poppins dark:text-white text-black'>
                                                        {index + 1}. {item.title}
                                                    </p>
                                                ) : (
                                                    <>
                                                    </>)}
                                            </>
                                        ) : (
                                            <div></div>
                                        )}
                                        {/* arrow button for collapsed video content */}
                                        <div className="flex items-center">
                                            <AiOutlineDelete className={`dark:text-white text-[20px] mr-2 text-black
                                            ${index > 0 ? "cursor-pointer" : "cursor-no-drop"}`}
                                                onClick={() => {
                                                    if (index > 0) {
                                                        const updatedData = [...courseContentData];
                                                        updatedData.splice(index, 1);
                                                        setCourseContentData(updatedData);
                                                    }
                                                }} />
                                            <MdOutlineKeyboardArrowDown
                                                fontSize="large"
                                                className='dark:text-white text-black'
                                                style={{
                                                    transform: isCollapsed[index]
                                                        ? "rotate[180deg]"
                                                        : "roate[0deg]",
                                                }}
                                                onClick={() => handleCollapseToggle(index)}
                                            />
                                        </div>
                                    </div>
                                    {
                                        !isCollapsed[index] && (
                                            <>
                                                <div className='my-3'>
                                                    <label className={`${styles.label}`}>Video Title</label>
                                                    <input
                                                        key={index}
                                                        type='text'
                                                        placeholder='Project Plan ... '
                                                        className={`${styles.input}`}
                                                        value={item.title}
                                                        onChange={(e) => handleVideoTitle(index, e.target.value)} />
                                                </div>
                                                <div className='my-3'>
                                                    <label className={`${styles.label}`}>Video URL</label>
                                                    <input
                                                        type='text'
                                                        key={index}
                                                        placeholder='https://aws.video1.ap-south-east-1.com/'
                                                        className={`${styles.input}`}
                                                        value={item.videoUrl}
                                                        onChange={(e) => handleVideoUrl(index,e.target.value)} />
                                                </div>
                                                <div className='my-3'>
                                                    <label className={`${styles.label}`}>Video Description</label>
                                                    <textarea
                                                        rows={6}
                                                        cols={30}
                                                        placeholder='This video is about the hooks in react... '
                                                        className={`${styles.input} !h-min py-2`}
                                                        value={item.description}
                                                        onChange={(e) => handleVideoDescription(index,e.target.value)} />
                                                </div>
                                                {
                                                    item?.links.map((link: any, linkIndex: number) => (
                                                        <div className='mb-3 block'>
                                                            <div className='w-full flex items-center justify-between'>
                                                                <label className={`${styles.label}`}>
                                                                    Link {linkIndex + 1}
                                                                </label>
                                                                <AiOutlineDelete
                                                                    className={`${linkIndex === 0
                                                                        ? "cursor-no-drop"
                                                                        : "cursor-pointer"
                                                                        } text-black dark:text-white text-[20px]`}
                                                                    onClick={() =>
                                                                        linkIndex === 0
                                                                            ? null
                                                                            : handleRemoveLink(index, linkIndex)
                                                                    }
                                                                />
                                                            </div>
                                                            <input
                                                                type='text'
                                                                placeholder='Source Code ... {Link title}'
                                                                className={`${styles.input}`}
                                                                value={link.title}
                                                                onChange={(e) => handleVideoAddLink(index,linkIndex,e.target.value)}
                                                            />
                                                            <input
                                                                type='text'
                                                                placeholder='Source Code ... {Link URL}'
                                                                className={`${styles.input} mt-6`}
                                                                value={link.url}
                                                                onChange={(e) => {
                                                                    const updatedData = [...courseContentData];
                                                                    updatedData[index].links[linkIndex].url = e.target.value;
                                                                    setCourseContentData(updatedData);
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                {/* Add Link Button */}
                                                <div className='inline-block mb-4'>
                                                    <p className='flex items-center text-[18px] dark:text-white text-black cursor-pointer'
                                                        onClick={() => handleAddLink(index)}
                                                    >
                                                        <BsLink45Deg className='mr-2' /> Add Link
                                                    </p>
                                                </div>
                                            </>
                                        )}<br />
                                    {/* Add new Content */}
                                    {index === courseContentData.length - 1 && (
                                        <div>
                                            <p className='flex items-center text-[18px] dark:text-white text-black cursor-pointer'
                                                onClick={(e: any) => newContentHandler(item)}
                                            >
                                                <AiOutlinePlusCircle className='mr-2' />Add New Content
                                            </p>
                                        </div>

                                    )}
                                </div>
                            </>
                        )
                    })
                }
                <div className='flex items-center text-[20px] dark:text-white text-black cursor-pointer'
                    onClick={() => addNewSection()}>
                    <AiOutlinePlusCircle className='mr-2' />Add New Section
                </div>
            </form>
            <br />

            <div className="w-full flex items-center justify-between">
                <div
                    className={`${styles.button1}`}
                    onClick={() => prevButton()}>
                    Prev
                </div>
                <div
                    className={`${styles.button1}`}
                    onClick={() => handleOptions()}>
                    Next
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default CourseContent