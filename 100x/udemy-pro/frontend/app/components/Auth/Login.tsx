'use client'
import React, { FC, useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { styles } from '../../styles/style';
import { AiFillGithub, AiOutlineAim, AiOutlineAppstore, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

type Props = {
    setRoute : (route:string) => void;
};

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required("Please Enter Your Email"),
    password:Yup.string().required("Please Enter Your Password").min(6).max(48)
});

const Login:FC<Props> = ({setRoute}) => {
    const [show,setShow] = useState(false);
    const formik = useFormik({
        initialValues:{email:"",password:""},
        validationSchema:schema,
        onSubmit:async({email,password})=>{
            console.log(email,password);
        }
    });

    const {errors,touched,values,handleChange,handleSubmit} = formik;

  return (
    <div className='w1-full'>
        <h1 className={`${styles.title}`}>
            Login with ELearning
        </h1>
        <form onSubmit={handleSubmit}>
            <label className={`${styles.label}`} htmlFor='email'>
                Enter Your Email
            </label>
            <input
            type='email'
            name=''
            value={values.email}
            onChange={handleChange}
            id='email'
            placeholder='login@mail.com'
            className={`${errors.email && touched.email && "border-red-500"} ${styles.input}`}
            />
            {errors.email && touched.email && (
                <span className='text-red-500 pt-2 block'>
                    {errors.email}
                </span>
            )}
            <div className='w-full mt-5 relative mb-1'>
            <label className={`${styles.label}`} htmlFor='password'>
                Enter Your Password
            </label>
            <input
            type={!show ? "password" : "text"}
            name='password'
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder='password!@%'
            className={`${errors.email && touched.email && "border-red-500"} ${styles.input}`}
            />
            { !show ? (
                <AiOutlineEyeInvisible
                className='absolute bottom-3 right-2 z-1 cursor-pointer'
                size={20}
                onClick={()=>setShow(true)}
                />
            ):(
                <AiOutlineEye
                className='absolute bottom-3 right-2 z-1 cursor-pointer'
                size={20}
                onClick={()=>setShow(false)}
                />
            )}
            {errors.password && touched.password && (
                <span className='text-red-500 pt-2 block'>
                    {errors.password}
                </span>
            )}
            </div>
            <div className='w-full mt-5'>
                <input
                type='submit' 
                value="signin"
                className={`${styles.button}`}/>
            </div><br/>
            <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
                Or Join with
            </h5>
            <div className='flex items-center justify-center my-3'>
                <FcGoogle size={30} className='cursor-pointer mr-2'/>
                <AiFillGithub size={30} className='cursor-pointer ml-2'/>
            </div>
            <h5 className='text-center pt-4 font-Poppins text-[14px]'>
                Not have any account ? {""}
                <span className='text-[#2190ff] pl-1 cursor-pointer'
                onClick={()=>setRoute("signup")}>
                    Sign Up
                </span>
            </h5>
        </form>
    </div>
  )
}
export default Login