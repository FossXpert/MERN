import Image from 'next/image';
import React, { FC } from 'react'
import thumbnail from '../../assets/zoom.png';
import Rating from '@mui/material/Rating';
import { MdOutlineFormatListNumbered } from 'react-icons/md';



type Props = {
    name : string;
    price : string;
    estimatedPrice : string;
    tags : string;
    thumbnail : string;
    level : string;
    demoUrl : string;
    totalVideos : string;
}
const border = 'border border-solid border-black';
const shadow = 'shadow-md shadow-black'
const CourseCard:FC<Props> = ({name,price,estimatedPrice,tags,thumbnail,level,demoUrl,totalVideos}) => {
  return (
    <>
        <div className={`flex flex-col bg-[rgb(249,250,251)] w-[250px] h-[310px] p-2 ${border} !border-[#ccc] rounded-sm shadow-md shadow-grey-700`}>
            <div className={`flex flex-col w-full h-[185px] ${border}`}>
              <Image src={'https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75'} alt='text' width={250} height={185}/>
            </div>
            <div className={`flex flex-col w-full h-[125px] ${border} !border-red-500`}>
              <div className={`flex w-full h-[45px] overflow-hidden ${border}`}>
                <p className={`m-0 text-[1.1rem] font-semibold`}>ChatGPT Complete guide: Learn Midjourney,ChatGPT</p>
              </div>
              <div className={`flex w-full h-[20px] items-center ${border}`}>
                <p className={`m-0 text-[0.7rem] font-[400] text-[rgb(82,82,82)]`}>By Chat GPT</p>
              </div>
              <div className={`flex w-full h-[25px] mt-1 justify-between items-center ${border}`}>
                  <div className={`flex w-[65px] h-[22px] bg-[rgb(225,244,232)] justify-center leading-5 rounded-[9999px] ${border}`}>
                    <p className={`text-[.85rem] m-0 text-[rgb(21,168,61)] font-semibold`}>Easy</p>
                  </div>
                  <div className={`flex w-auto h-[22px] justify-center ${border}`}>
                  <Rating
                    size='small'
                    name="simple-controlled"
                    value={2.5}
                    precision={0.5}
                    readOnly
                  />
                  </div>
              </div>
              <div className={`flex w-full h-[25px] mt-1 justify-between items-center ${border}`}>
                <div className='flex'>
                  $12
                </div>
                <div className='flex'>
                  <button className='button-global !h-[1.5rem]'>Add to Cart</button>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default CourseCard