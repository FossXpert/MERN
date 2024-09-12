import React, { FC, useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import Header2 from '../Header2'
import { useGetallcourseQuery, useGetSingleCourseQuery } from '../../../redux/features/courses/courseApi'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useAddToCartMutation, useGetCartStatusQuery } from '../../../redux/features/cart/cartApi'

type Props = {
    productId : string;
}

const hehegreen= 'border border-solid border-green-500';
const heheblack = 'border border-solid border-black';

const Cart = () => {
  const [open,setOpen] = useState(false);
  const [route, setRoute] = useState('signin');

  const {data,isLoading,isSuccess,error,refetch} = useGetCartStatusQuery({},{refetchOnMountOrArgChange:true});
  const {data:courseData,isSuccess:courseSuccess,error:courseError,refetch:refetchCourse} = useGetallcourseQuery({},{refetchOnMountOrArgChange:true});


  useEffect(()=>{
    if(isLoading){
      toast.success("isLoading");
    }
    if(isSuccess){
        console.log(data);
      toast.success("Data fetched successfully");
    }
    if(courseSuccess){
      console.log(courseData);
    toast.success("Course Data fetched successfully");
  }
    if(error){
      if('data' in error){
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  },[]);

 

  return (
    <>
      <div className={`flex flex-col`}>
        <Header2
          open={open}
          setOpen={setOpen}
          route={route}
          setRoute={setRoute}
        />
        <div className={`flex flex-col items-center w-full h-[100vh] ${heheblack}`}>
          <h1 className={`flex m-0 p-0 flex-col items-center w-full h-auto ${hehegreen}`}>
            Shopping Cart
          </h1>
          
          <div className={`flex w-[90%] mt-2 h-auto ${hehegreen}`}>
            <Image src='https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75' 
              alt='text' width={125} height={90} />
            <div className='flex flex-col w-[40%] h-auto border border-solid border-black rounded-sm p-2 '>
                <h4 className='m-0 p-0 text-[1.1rem] font-semibold'>Title</h4>
                <button className='mt-6 w-[65px]'>Remove</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[10%] h-auto border border-solid border-black rounded-sm p-2 '>
                <p>Price</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[10%] h-auto border border-solid border-black rounded-sm p-2 '>
                <p>Quantity</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[20%] h-auto border border-solid border-black rounded-sm p-2 '>
                <p>Total</p>
            </div>
          </div>
          <div className={`flex w-[90%] mt-2 h-auto ${hehegreen}`}>
            <Image src='https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75' 
              alt='text' width={125} height={90} />
            <div className='flex flex-col w-[40%] h-auto border border-solid border-black rounded-sm p-2 '>
                <h4 className='m-0 p-0 text-[1.1rem] font-semibold'>Title</h4>
                <button className='mt-6 w-[65px]'>Remove</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[10%] h-auto border border-solid border-black rounded-sm p-2 '>
                <p>Price</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[10%] h-auto border border-solid border-black rounded-sm p-2 '>
                <p>Quantity</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[20%] h-auto border border-solid border-black rounded-sm p-2 '>
                <p>Total</p>
            </div>
          </div>
          <div className={`flex w-[90%] mt-2 h-auto ${hehegreen}`}>
            <button className='w-[20%]'>Clear Cart</button>
            <div className={`flex flex-col h-auto w-[80%] ${heheblack}`}>
                <div className={`flex justify-around items-center h-[60px] w-full ${hehegreen}`}>
                    <h4>Subtotal</h4>
                    <h4>Price</h4>
                </div>
                <div className={`flex justify-end items-center h-[60px] w-auto ${heheblack}`}>
                    <div className={`flex justify-around items-center h-[60px] w-[30%] ${hehegreen}`}>
                        <button className='flex gap-2'>
                          <FaArrowLeftLong/>
                          Continue Shopping
                        </button>
                    </div>
                    <div className={`flex justify-around items-center h-[60px] w-[30%] ${hehegreen}`}>
                        <button>Checkout</button>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart