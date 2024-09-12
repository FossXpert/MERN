import Image from 'next/image';
import React, { FC } from 'react'
import thumbnail from '../../assets/zoom.png';
import Rating from '@mui/material/Rating';
import { MdOutlineFormatListNumbered } from 'react-icons/md';
import Link from 'next/link';
import { useAddToCartMutation } from '../../../redux/features/cart/cartApi';



type Props = {
    id: string;
    name : string;
    postedBy : {
      userId : string;
      email : string;
      name : string;
    };
    price : string;
    estimatedPrice : string;
    tags : string;
    thumbnail : string;
    level : string;
    demoUrl : string;
    totalVideos : string;
}
const border = '';
const shadow = 'shadow-md shadow-black'
const CourseCard:FC<Props> = ({id,name,postedBy,price,estimatedPrice,tags,thumbnail,level,demoUrl,totalVideos}) => {
  
  const [addToCart,{data,isLoading,error}] = useAddToCartMutation();

  const handleOnClick = () => {
    console.log("Clicked");
    console.log("id is : ",id);
  }
    const handleAddToCart = async() =>{
      const data1 = await addToCart(id);
      console.log("data is ",data)
      console.log("data1 is ",data1)
      if(error){
        if('data' in error){
          const errorData = error as any;
          console.log(errorData.message);
        }
      }
    }
  
  return (
    <>
        <div onClick={handleOnClick} className={`flex flex-col bg-[rgb(249,250,251)] w-[250px] h-[310px] p-2 ${border} !border-[#ccc] rounded-sm shadow-md shadow-grey-700`}>
            <div className={`flex flex-col w-full h-[185px] ${border}`}>
            <Link href={`courses/${id}`} className='no-underline text-black'>
              <Image src={'https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75'} alt='text' width={250} height={185}/>
            </Link>
            </div>
            <div className={`flex flex-col w-full h-[125px] ${border} !border-red-500`}>
              <div className={`flex w-full h-[45px] overflow-hidden ${border}`}>
                <p className={`m-0 text-[1.1rem] font-semibold`}>{name}</p>
              </div>
              <div className={`flex w-full h-[20px] items-center ${border}`}>
                <p className={`m-0 text-[0.7rem] font-[400] text-[rgb(82,82,82)]`}>{postedBy?.name}</p>
              </div>
              <div className={`flex w-full h-[25px] mt-1 justify-between items-center ${border}`}>
                  <div className={`flex w-[65px] h-[22px] bg-[rgb(225,244,232)] justify-center leading-5 rounded-[9999px] ${border}`}>
                    <p className={`text-[.85rem] m-0 text-[rgb(21,168,61)] font-semibold`}>{level}</p>
                  </div>
                  <div className={`flex w-auto h-[22px] justify-center ${border}`}>
                  <Rating
                    size='small'
                    name="simple-controlled"
                    value={3}
                    precision={0.5}
                    readOnly
                  />
                  </div>
              </div>
              <div className={`flex w-full h-[25px] mt-1 justify-between items-center ${border}`}>
                <div className='flex'>
                  {price === estimatedPrice ? (
                    <p className={`m-0 text-[0.8rem] font-semibold text-[rgb(82,82,82)]`}>${price}</p>
                  ) : (
                    <p className={`m-0 text-[0.8rem] font-semibold text-[rgb(82,82,82)]`}> 
                    ${price}
                     <span className={`text-[rgb(82,82,82)] line-through`}>${estimatedPrice}
                     </span>
                    </p>
                  )}
                </div>
                <div className='flex'>
                  <button className='button-global !h-[1.5rem]' onClick={()=>handleAddToCart()}>Add to Cart</button>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default CourseCard