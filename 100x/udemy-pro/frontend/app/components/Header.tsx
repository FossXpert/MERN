'use client';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import NavItems from '../utills/NavItems';
import { ThemeSwitcher } from '../utills/ThemeSwitcher';
import { HiOutlineArrowRight, HiOutlineMenuAlt3, HiOutlineUserCircle, HiOutlineX } from 'react-icons/hi';
import CustomModel from '../utills/CustomModel';
import Login from '../components/Auth/Login'
import Signup from './Auth/Signup';
import Verification from './Auth/Verification';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import avatar from '../../public/next.svg'
import { useSession } from 'next-auth/react';
import { useSocialAuthMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void; //profile icon
    activeItem: number;
    route: string;
    setRoute: (route: string) => void;
}

const Header: FC<Props> = ({ activeItem, open, setOpen, route, setRoute }) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const { user } = useSelector((state: any) => state.auth)
    const { data } = useSession();
    const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();

    console.log(data)
    useEffect(() => {
        if (!user) {
            if (data) {
                socialAuth({ email: data.user?.email, name: data.user?.name, avatar: data.user?.image })
            }
        }
        if(isSuccess){
            toast.success("Login SuccessFull")
        }
        if(error){
            if("data" in error){
                const errorData = error as any;
                toast.error(errorData.data.message)
            }
        }
    }, [data, user])
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
    };
    const handleClose = () => {
        console.log("outside");
        setOpenSidebar(false)
    }
    return (
        <div className='w-full relative'>
            <div className={`${active ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
                : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"}`}>
                <div className='w-[95%] 800px:w-[92%] m-auto py-2 h-full'>
                    <div className='w-full h-[80px] flex items-center justify-between p-3'>
                        <div>
                            <Link href={'/'} className={`text-[25px] font-Popping font-[500] text-black dark:text-white`}>
                                ELearning
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <NavItems
                                activeItems={activeItem}
                                isMobile={false}
                            ></NavItems>
                            <ThemeSwitcher />
                            {/* Only For Mobile */}
                            <div className='800px:hidden'>
                                <HiOutlineMenuAlt3 //it is the sidebar icon for mobile
                                    size={25}
                                    className="cursor-pointer dark:text-white text-black "
                                    onClick={() => setOpenSidebar(true)} />
                            </div>
                            {
                                user ? (

                                    <HiOutlineUserCircle
                                        size={25}
                                        // hidden 800px:block yse write karo niche
                                        className='cursor-pointer dark:text-white text-black'
                                        onClick={() => setOpen(true)} />

                                ) : (
                                    <HiOutlineUserCircle
                                        size={25}
                                        // hidden 800px:block yse write karo niche
                                        className='cursor-pointer dark:text-white text-black'
                                        onClick={() => setOpen(true)} />
                                )
                            }
                        </div>
                    </div>
                </div>
                {/* Mobile SideBar  */}
                {
                    openSidebar && (
                        <div className='fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#d2444424]'>
                            <div className='w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0'>
                                <NavItems activeItems={activeItem} isMobile={true} />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>{/*This one is my Div*/}
                                    <HiOutlineUserCircle
                                        size={25}
                                        className='cursor-pointer ml-5 my-2 text-black dark:text-white'
                                        onClick={() => setOpen(false)} />
                                    <HiOutlineArrowRight size={25} className='cursor-pointer ml-5 my-2 text-black dark:text-white'
                                        onClick={() => handleClose()} />
                                </div>
                                <br /><br />
                                <p className='text-[16px] px-2 pl-5 text-black dark:text-white'>
                                    © 2023 Udemy-Clone
                                </p>
                            </div>
                        </div>
                    )}
            </div>
            {
                route === 'signin' && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Login}
                                />
                            )
                        }
                    </>
                )
            }
            {
                route === 'signup' && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Signup}
                                />
                            )
                        }
                    </>
                )
            }
            {
                route === 'verification' && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Verification}
                                />
                            )
                        }
                    </>
                )
            }
        </div>
    );
};

export default Header;