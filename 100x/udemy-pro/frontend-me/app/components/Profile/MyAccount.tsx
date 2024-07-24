import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../css/css-profile/myaccount.css'
import { CiCamera } from 'react-icons/ci'
import { useUpdateUserInfoMutation } from '../../../redux/features/auth/authApi'
import toast from 'react-hot-toast'
import { useLoadUserQuery } from '../../../redux/features/api/apiSlice'

type Props = {}

const MyAccount = (props: Props) => {
    const {user} = useSelector((state:any) => state.auth);
    const [loadUser,setLoadUser] = useState(false)
    const [updateUserInfo,{isSuccess,error,data,isLoading}] = useUpdateUserInfoMutation();
    const [name,setName] = useState(user && user.name);
    const {refetch} = useLoadUserQuery(undefined,{skip:false})



    useEffect(()=>{
        if(isSuccess){
            refetch();
            toast.success("updated");
            setLoadUser(true)
            console.log("user is",user)
        }
        if(error){
            if('data' in error){
                const errorData = error as any;
                toast.error(errorData.data.message);
            }
        }
    },[isSuccess,error]);

    const imageHandle = async() => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if(fileReader.readyState === 2){
                const avatar = fileReader.result as String;
                console.log(avatar);
                await usePro

            }
        }
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await updateUserInfo({
                name : name
            });
            console.log(data)
        } catch (error) {
            throw error
        }
    }
    return (
    <div className='myaccount-container'>
        <div className="image-container">
            <Image
             className='myaccount-image' 
             src={user?.avatar?.url} 
             width={64} height={64} alt='No'/>
             <div className="camera-icon" onClick={() => console.log("hi")}>
                    <CiCamera />
             </div>
        </div>
        <div className='myaccount-text'>
            <form onSubmit={handleSubmit}>
            <div className='myaccount-text-1'>
                <label htmlFor="fullname">Full Name</label>
                <input type='text'
                className='input-field'
                value={name}
                name='fullname'
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='myaccount-text-1'>
                <label htmlFor="email">Email Address</label>
                <input type='text'
                readOnly
                className='input-field'
                value={user?.email}
                name='email'
                />
            </div>
                <input type='submit'
                className='button-global'
                name='submit'
                />
            </form>  
        </div>
    </div>
  )
}

export default MyAccount