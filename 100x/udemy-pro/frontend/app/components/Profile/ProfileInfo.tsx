import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'
import profileImage from '../Profile/profile-pic.png'
import { AiOutlineCamera } from 'react-icons/ai';
import { styles } from '../../styles/style';
import { useEditProfileMutation, useUpdateAvatarMutation } from '../../../redux/features/user/userApi';
import { useLoadUserQuery } from '../../../redux/features/api/apiSlice';
import toast from 'react-hot-toast';

type Props = {
    avatar : any;
    user : any;
}

const ProfileInfo:FC<Props> = ({avatar,user}) => {
    
    const [name,setName] = useState(user && user.name);
    const [updateAvatar,{isSuccess,error}] = useUpdateAvatarMutation();
    const [loadUser,setLoadUser] = useState(false);
    const {} = useLoadUserQuery(undefined,{skip: loadUser ? false : true})
    const [editProfile,{isSuccess:editProfileSuccess,error:editProfileError}] = useEditProfileMutation();
    
    const imageHandler = async(e : any) => {
        console.log("imageHandler")
        const fileReader = new FileReader();

        fileReader.onload = () => {
            if(fileReader.readyState === 2){
                const avatar =  fileReader.result as string;
                console.log(avatar)
                updateAvatar({
                    avatar
                })
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
    };
    
    useEffect(()=>{
        if(isSuccess || editProfileSuccess){
            setLoadUser(true);
            toast.success("isSuccess");
        }
        if(error || editProfileError){
            console.log(error)
            toast.error("Error Occured")
            throw error;
        }
    },[isSuccess,editProfileSuccess,error,editProfileError])

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        console.log("Submit")
        if(name!==""){
            await editProfile({
                name: name,
            });
            console.log("name : ",name);
        }
    };
  
    return (
    <>
    <div className='w-full flex justify-center'>
        <div className='relative'>
            <Image
            src={ user.avatar? user.avatar.url:profileImage }
            alt='Profile Picture'
            width={120}
            height={120}
            className='w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full'
            />
            <input 
            type='file'
            name=''
            id='avatar'
            className='hidden'
            onChange={imageHandler}
            accept='image/png,image/jpg,image/jpeg,image/webp'
            />
            <label htmlFor='avatar'>
                <div className='w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer'>
                    <AiOutlineCamera size={20} className='z-1'/>
                </div>
            </label>
        </div>
    </div><br/><br/>
    <div className='w-full pl-6 800px:pl-10'>
        <form onSubmit={handleSubmit}>
            <div className='800px:w-[50%] m-auto block pb-4'>
                <div className='w-[100%]'>
                    <label className='block pb-2'>
                        Full Name
                    </label>
                    <input
                    type='text'
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className='w-[100%] pt-2'>
                    <label className='block pb-2'>
                        Email Address
                    </label>
                    <input
                    type='text'
                    readOnly
                    className={`${styles.input} !w-[95%} mb-1 800px:mb-0]`}
                    required
                    value={user?.email}
                    />
                </div>
                <input
                className={`${styles.button}`}
                type='submit'
                value='update'
                required
                />
            </div>
        </form>
        <br/>
    </div>
    </>
  )
}

export default ProfileInfo;