import { FC, useEffect, useState } from "react"
import '../css/header2.css';
import { FaCartShopping, FaFacebook, FaInstagram, FaMagnifyingGlass, FaXTwitter } from "react-icons/fa6";
import zoom from '../assets/zoom.png';
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { IoLogIn } from "react-icons/io5";
import { useLoadUserQuery } from "../../redux/features/api/apiSlice";
import toast from "react-hot-toast";
import LoginModal from "./Profile/LoginModal";
import Profile from "./Profile/Profile";
import { MdOutlineLogin, MdOutlineMenuOpen, MdSearch, MdShoppingCartCheckout } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

type Props = {
  open : boolean;
  setOpen: (open:boolean) => void;
  route: string;
  setRoute: (route:string) => void;
}

const Header2 : FC<Props> = ({open,setOpen,route,setRoute}) => {

  const {isSuccess,data,isLoading,error} = useLoadUserQuery({});
  const [openProfile,setOpenProfile] = useState(false);
  
  useEffect(()=>{
    if(isSuccess){
        console.log(data);
    }
    if(error){
        if("data" in error){
            const errorData = error as any;
            toast.error(errorData.data.message);
        }
    }
},[isSuccess,error,data]);

const handleProfile = () => {
    setOpenProfile(true);
}
const handleIologin = () => {
    setOpen(true);
}

  return (
    <>
    <div className="header">
      <div className="container">
      <div className="container2">
        <Image src={zoom} alt="" />
      </div>
      <div className="container1">
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
        <div className="container2-mobile">
          <Image src={zoom} alt="" />
        </div>
        <div className="container3">
          <ul>Home</ul>
          <ul>Course</ul>
          <ul>About</ul>
          <ul>Policy</ul>
          <ul>FAQ</ul>
        </div>
        <div className="container4">
        <div className='icon-1'>
            <IoMdSearch/>
        </div>
        <div className='icon-1'>
        <MdShoppingCartCheckout />
        </div>
        <div className='icon-1'>
            {
                data ? <CgProfile onClick={()=>handleProfile()}/> : <MdOutlineLogin onClick={()=>handleIologin()}/>
            }
        </div>
        </div>
        {
          <div className='icon-ham'>
            <MdOutlineMenuOpen />
          </div>
        }
      </div>
    </div>
    <div> 
        {
          open && <LoginModal
           open={open} 
           setOpen={setOpen}
           route={route}
           setRoute={setRoute}/>
        }
        {
            openProfile && <Profile
            openProfile={openProfile}
            setOpenProfile={setOpenProfile}/>
        }
        {
          
        }
    </div>
    </>
  )
}

export default Header2