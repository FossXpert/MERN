import toast from 'react-hot-toast';
import { useUpdatePasswordMutation } from '../../../redux/features/user/userApi';
import { styles } from '../../styles/style';
import React, { useEffect, useState } from 'react'

type Props = {}

const ChangePassword = (props: Props) => {

    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const[updatePassword,{isSuccess:updatePasswordSuccess,error:updatePasswordError}] = useUpdatePasswordMutation()

    const passWordChangeHandler = async(e:any) => {
        e.preventDefault();
        if(oldPassword === newPassword){
            toast.error("Old and new password are same,Enter diff Password");
            return;
        }
        if(newPassword !== confirmPassword){
            toast.error("Password do not match")
        }else{
            await updatePassword({oldPassword,newPassword});
        }
    };

    useEffect(()=>{
        if(updatePasswordSuccess){
            toast.success("Password Updated SuccessFully");
        }
        if(updatePasswordError){
            if("data" in updatePasswordError){
                const errorData = updatePasswordError as any
                toast.error(errorData.data.message);
            }
        }
    },[updatePasswordSuccess,updatePasswordError])

  return (
    <div className='w-full pl-7 px-2 800px:px-5 800px:pl-0'>
        <h1 className={`${styles.title}`}>
            Change Password
        </h1>
        <div className='w-full'>
            <form 
            aria-required
            onSubmit={passWordChangeHandler}
            className='flex flex-col items-center'
            >
                <div className='w-[100%] 800px:w-[60%] mt-5'>
                    <label className={`${styles.label}`}>
                        Enter Your Old Password
                    </label>
                    <input
                    type='password'
                    className={`${styles.input} !w-[70%]`}
                    required
                    value={oldPassword}
                    onChange={(e)=>setOldPassword(e.target.value)}
                    />
                </div>
                <div className='w-[100%] 800px:w-[60%] mt-2'>
                    <label className={`${styles.label}`}>
                        Enter Your New Password
                    </label>
                    <input
                    type='password'
                    className={`${styles.input} !w-[70%]`}
                    required
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}
                    />
                </div>
                <div className='w-[100%] 800px:w-[60%] mt-2'>
                    <label className={`${styles.label}`}>
                        Enter Confirm Password
                    </label>
                    <input
                    type='password'
                    className={`${styles.input} !w-[70%]`}
                    required
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                <input 
                type='submit'
                required
                value='update'
                className={`${styles.button} !w-[40%] mt-5`}
                />
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default ChangePassword