import React, { FC, useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import Header2 from '../Header2'
import { useGetallcourseQuery } from '../../../redux/features/courses/courseApi'
import toast from 'react-hot-toast'
import Image from 'next/image'

type Props = {

}

const hehegreen= 'border border-solid border-green-500';
const heheblack = 'border border-solid border-black';

const Cart = () => {
  const [open,setOpen] = useState(false);
  const [route, setRoute] = useState('signin');

  const {data,error,isLoading,refetch} = useGetallcourseQuery({},{refetchOnMountOrArgChange:true});


  useEffect(()=>{
    if(isLoading){
      toast.success("isLoading");
    }
    if(data){
      toast.success("Data fetched successfully");
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
            <div className='flex flex-col w-full h-auto'>
                <h4 className='m-0 p-0 text-[1.1rem] font-semibold'>Title</h4>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart