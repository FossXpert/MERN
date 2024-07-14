import React, { FC } from 'react'
import '../css/header.css'
import { FaCartShopping, FaFacebook, FaInstagram, FaMagnifyingGlass, FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import zoom from '../assets/zoom.png';
import { GiHamburgerMenu, GiRamProfile } from 'react-icons/gi';
import { IoLogIn } from "react-icons/io5";
import { CgProfile } from 'react-icons/cg';


type Props = {
    
    open : boolean;
    setOpen: (open:boolean) => void;
    route: string;
    setRoute: (route:string) => void;
}

const Header:FC<Props> = ({open,setOpen,route,setRoute}) => {

    const handleProfile = () => {
        setOpen(false);
    }
    const handleIologin = () => {
        setOpen(true);
    }
    
  return (
    <>
    <div className='wrapper'>
        <div className='wrapper-1'>
        <div className='wrapper-icon'>
        <div className='icon'>
            <FaXTwitter/>
        </div>
        <div className='icon'>
            <FaInstagram/>
        </div>
        <div className='icon'>
            <FaFacebook/>
        </div>
    </div>
    <div className='wrapper-logo'>
        <Image src={zoom} alt=''/>    
    </div>
        </div>
        <div className='wrapper-2'>
        <div className='wrapper-options'>
        <p>Home</p>
        <p>Course</p>
        <p>About</p>
        <p>Policy</p>
        <p>FAQ</p>
    </div>
    <div className='wrapper-cart-search-ham'>
    <div className='icon-1'>
            <FaMagnifyingGlass/>
        </div>
        <div className='icon-1'>
            <FaCartShopping/>
        </div>
        <div className='icon-1'>
            {
                open ? <CgProfile onClick={()=>handleProfile()}/> : <IoLogIn onClick={()=>handleIologin()}/>
            }
        </div>
    </div>
        </div>    
    </div>
    {
        open ? 
    }
    </>
  )
}

export default Header