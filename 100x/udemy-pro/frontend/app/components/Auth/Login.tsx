'use client'
import React, { FC, useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { styles } from '../../styles/style';

type Props = {
    setRoute : (route:string) => void;
};

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required("Please Enter Your Email"),
    password:Yup.string().required("Please Enter Your Password").min(6).max(48)
});

const Login:FC<Props> = (props: Props) => {
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
            <label className={`${styles.label}`}></label>
        </form>
    </div>
  )
}
export default Login