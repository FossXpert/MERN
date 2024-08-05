import React,{FC} from 'react';
import CoursePlayer from './CoursePlayer';
import { styles } from '../../styles/style';
import Ratings from '../../utills/Ratings';
import {IoCheckmarkDoneOutline} from 'react-icons/io5'

type Props = {
    active : number;
    setActive : (active:number) => void;
    courseData : any;
    handleCourseCreate : any;
    isEdit?: boolean;
}

const CoursePreview : FC<Props>= ({isEdit,courseData,handleCourseCreate,active,setActive}) => {
  
  const discountPercentagePrice = 
    ((courseData?.estimatedPrice - courseData?.price)/courseData?.estimatedPrice)*100;
  const discountPercentage = discountPercentagePrice.toFixed(0);
  
  const prevButton = async() =>{
    setActive(active-1);
  }

  const handleOptions = async() =>{
      handleCourseCreate();
  }
  return (
    <div className='w-[90%] m-auto py-5 mb-5'>
      <div className='w-full relative'>
        <div className='w-full mt-10'>
          {/* <CoursePlayer
          videoUrl={courseData?.demoUrl}
          title={courseData?.title}
          /> */}
        </div>
        <div className="flex items-center">
          <h1 className="pt-5 text-[25px] dark:text-white">
            {courseData?.price === 0 ? "Free" : courseData?.price+"$"}
          </h1>
          <h5 className='pl-3 text=[20px] mt-2 line-through opacity-80 dark:text-white'>
            {courseData?.estimatedPrice}$
          </h5>
          <h4 className="pl-5 pt-4 text-[22px] dark:text-white">
            {discountPercentage}% Off
          </h4>
          </div>
          <div className='flex items-center'>
            <div className={`${styles.button1} !bg-[crimson]`}>
              Buy Now {courseData.price}$
            </div>
          </div>
          <div className='flex items-center'>
            <input
            type='text'
            name=''
            id=''
            placeholder='Discount code ...'
            className={`${styles.input} !w-[60%] ml-1 !mt-8`}
            />
            <div className={`${styles.button1} !w-[30%] cursor-pointer`}>
              Apply
            </div>
          </div>
          <p className="pb-1 pt-2">* Source Code Included</p>
          <p className="pb-1">* Full Lifetime access</p>
          <p className="pb-1">* Certificate of completion</p>
          <p className="pb-3">* Premium Support</p>
        </div>
        <div className='w-full'>
          <div className='w-full 800px:pr-5'>
            <h1 className='text-[25px] font-Poppins font-[600]'>
              {courseData?.name}
            </h1>
          <div className='flex items-center justify-between pt-3'>
            <div className="flex items-center">
              <Ratings rating={0}/>
              <h5>0 Reviews</h5>
            </div>
            <h5>0 Students</h5>
          </div>
          <br/>
          <h1 className='text-[25px] font-Poppins font-[600]'>
            What you will learn fromt this course
          </h1>
          </div>
          {courseData?.benefits?.map((item:any,index:number) => (
              <div className="w-full flex 800px:items-center py-2" key={index}>
                <div className="w-[15px] mr-1 ">
                  <IoCheckmarkDoneOutline size={20}/>
                </div>
                <p className='pl-2'>{item.title}</p>
              </div>
            ))}
            <br/>
            <br/>
              <h1 className='text-[25px] font-Poppins font-[600]'>
                What are the prequisites for starting this course ?
              </h1>
              {courseData?.prerequisites?.map((item:any,index:number) => (
                <div className='w-full flex 800px:items-center py-2' key={index}>
                  <div className='w-[15px] mr-1'>
                    <IoCheckmarkDoneOutline size={20}/>
                  </div>
                  <p className='pl-2'>{item.title}</p>
                </div>
              ))}
            
            {/* Course Description */}
            <div className='w-full'>
              <h1 className="text-[25px] font-Poppins font-[600]">
                Course Details
              </h1>
              <p className='text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden'>
              {courseData?.description}
              </p>
            </div>
            <br/>
            <br/>
            <div>
        <div className="w-full flex items-center justify-between">
          <div 
            className={`${styles.button1}`}
            onClick={()=>prevButton()}>
                    Prev
          </div>
          <div
            className={`${styles.button1}`}
            onClick={()=>handleOptions()}>
            {
              isEdit ? 'Update' : 'Create'
            }       
          </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default CoursePreview