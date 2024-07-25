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
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
                    <div className='myaccount-text-1'>
                        <label htmlFor="oldpass">Old Password</label>
                        <input type='password'
                            id='oldpass'
                            name='oldpass'
                            className='input-field'
                            value={oldPassword}
                            placeholder='Old Password'
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className='myaccount-text-1'>
                        <label htmlFor="newpass">New Password</label>
                        <input type='password'
                            id='newpass'
                            name='newpass'
                            className='input-field'
                            value={newPassword}
                            placeholder='New Password'
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className='myaccount-text-1'>
                        <label htmlFor="cpass">Confirm Password</label>
                        <input type='password'
                            id='cpass'
                            name='cpass'
                            className='input-field'
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword