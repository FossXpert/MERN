import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../../css/css-profile/changePassword.css'
import '../../css/css-profile/myaccount.css'
import { z } from 'zod';
import { useFormik } from 'formik';
import { useUpdatePasswordMutation } from '../../../redux/features/auth/authApi';
import toast from 'react-hot-toast';


type Props = {}

const ChangePassword = (props: Props) => {
    const { user } = useSelector((state: any) => state.auth);
    const [updatePassword,{data,isSuccess,error,isLoading}] = useUpdatePasswordMutation();
    

    const updatePasswordSchema = z.object({
        oldPassword : z.string().min(6,{message : 'Minimum Six Characters'}).max(32,{
            message : 'Max 32 characters '
        }),
        newPassword : z.string().min(6,{message : 'Minimum Six Characters'}).max(32,{
            message : 'Max 32 characters '
        }), 
        confirmPassword : z.string().min(6,{message : 'Minimum Six Characters'}).max(32,{
            message : 'Max 32 characters '
        }),
    }).refine((data) => data.newPassword === data.confirmPassword,{
        message : 'Password not matched',
        path : ['confirmPassword']
    })

    const updatePasswordFormik = useFormik({
        initialValues : {
            oldPassword : '',
            newPassword : '',
            confirmPassword : '',
        },
        validate : (values) => {
            try {
                updatePasswordSchema.parse(values);
            } catch (e:any) {
                return e.formErrors.fieldErrors;
            }
        },
        onSubmit : async(values) => {
           try {
                await updatePassword(values); 
           } catch (error) {
                console.log(error);
                toast.error("Error Occured");
           } 
        }
    })


    return (
        <>
            <div className="myaccount-container">
                <h1 className='font-[500]'>Change Password</h1>
                <div className='myaccount-text'>
                <form onSubmit={updatePasswordFormik.handleSubmit}>
                    <div className='myaccount-text-1'>
                        <label htmlFor="oldPassword">Old Password</label>
                        <input type='text'
                            id='oldPassword'
                            name='oldPassword'
                            className='input-field'
                            value={updatePasswordFormik.values.oldPassword}
                            placeholder='Old Password'
                            onChange={updatePasswordFormik.handleChange}
                        />
                        {updatePasswordFormik.errors.oldPassword && 
                            updatePasswordFormik.touched.oldPassword && (
                                <div className='error'>{updatePasswordFormik.errors.oldPassword}</div>
                            )}
                    </div>
                    <div className='myaccount-text-1'>
                        <label htmlFor="newPassword">New Password</label>
                        <input type='password'
                            id='newPassword'
                            name='newPassword'
                            className='input-field'
                            value={updatePasswordFormik.values.newPassword}
                            placeholder='New Password'
                            onChange={updatePasswordFormik.handleChange}
                        />
                        {updatePasswordFormik.errors.newPassword && 
                            updatePasswordFormik.touched.newPassword && (
                                <div className='error'>{updatePasswordFormik.errors.newPassword}</div>
                            )}
                    </div>
                    <div className='myaccount-text-1'>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            className='input-field'
                            value={updatePasswordFormik.values.confirmPassword}
                            placeholder='Confirm Password'
                            onChange={updatePasswordFormik.handleChange}
                        />
                        {updatePasswordFormik.errors.confirmPassword && 
                            updatePasswordFormik.touched.confirmPassword && (
                                <div className='error'>{updatePasswordFormik.errors.confirmPassword}</div>
                            )}
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword