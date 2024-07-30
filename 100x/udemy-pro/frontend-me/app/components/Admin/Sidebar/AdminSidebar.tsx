import Image from 'next/image';
import React, { FC, useState } from 'react'
import { JSX } from 'react';
import profileImage from '../../../assets/thumnail.png'
import '../../../css/css-admin/adminSidebar.css'
import { MdDashboard } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { FaBullseye } from 'react-icons/fa6';
type Props = {
    //   user : any;
}

interface MenuItems {
    menuTitle: string;
    menuIcon: JSX.Element;
    link: string;
    subMenu: SubMenuItems[];
    active: boolean;
    open: boolean;
    dropDownIcon: JSX.Element;
}
interface SubMenuItems {
    subMenuTitle: string;
    subMenuIcon: JSX.Element;
    subMenuLink: string;
    subMenuActive: boolean;
}
const AdminSidebar = () => {
    const { user } = useSelector((state: any) => state.auth);
    const [active, setActive] = useState(0);
    const [menuItems, setMenuItems] = useState<MenuItems[]>([
        {
            menuTitle: 'Dashboard',
            menuIcon: <MdDashboard className='icon' />,
            link: '#',
            active: true,
            open: false,
            dropDownIcon: <IoIosArrowDown />,
            subMenu: [],
        },
        {
            menuTitle: 'Courses',
            menuIcon: <MdDashboard className='icon' />,
            link: '#',
            active: true,
            open: false,
            dropDownIcon: <IoIosArrowDown />,
            subMenu: [
                {
                    subMenuTitle: 'All Course',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: '#',
                },
                {
                    subMenuTitle: 'Create Course',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: 'admin/create-course',
                },
            ],
        },
        {
            menuTitle: 'Dashboard-1',
            menuIcon: <MdDashboard className='icon' />,
            link: '#',
            active: true,
            open: false,
            dropDownIcon: <IoIosArrowDown />,
            subMenu: [
                {
                    subMenuTitle: 'sub1',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: '#',
                },
                {
                    subMenuTitle: 'sub2',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: '#',
                },
                {
                    subMenuTitle: 'sub3',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: '#',
                }
            ],
        },
        {
            menuTitle: 'Dashboard-1',
            menuIcon: <MdDashboard className='icon' />,
            link: '#',
            active: true,
            open: false,
            dropDownIcon: <IoIosArrowDown />,
            subMenu: [
                {
                    subMenuTitle: 'sub1',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: '#',
                },
                {
                    subMenuTitle: 'sub2',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: '#',
                },
                {
                    subMenuTitle: 'sub3',
                    subMenuActive: true,
                    subMenuIcon: <MdDashboard className='icon' />,
                    subMenuLink: '#',
                }
            ],
        }
    ]);

    // This approach allow us to open multiple dropdowns
    const handleToggle = (index: number) => {
        const newMenuItems = [...menuItems];
        newMenuItems[index].open = !newMenuItems[index].open;
        setMenuItems(newMenuItems);
    };

    const handleOnClick = (index: number) => {
        setMenuItems((prevItems) =>
            prevItems.map((value, i) =>
                i === index ? { ...value, active: true } :
                    { ...value, active: false }
            ))
    }

    //This approach allow us to open only one dropdown
    // const handleToggle = (index:number) => {
    //   setMenuItems((prevMenuItems) =>
    //     prevMenuItems.map((value,i)=>
    //       i===index ? {...value,open : !value.open} : {...value, open : false}
    //     ))
    //   } 


    return (
        <>

            <div className="assidebar">
                <div className="ashead">
                    <div className="asuser-image">
                        <Image width={35} src={profileImage} alt='No' />
                    </div>
                    <div className="asuser-details">
                        <p className='astitle'>Senior Admin</p>
                        <p className='asname'>{user.name}</p>
                    </div>
                </div>
                <div className="asnav">
                    <div className="asmenu">
                        {
                            menuItems.map((value, index) => (
                                <ul key={index}>
                                    <li className={value.active ? 'active' : 'disabled'} >
                                        <a onClick={() => handleOnClick(index)}>
                                            {value.menuIcon}
                                            {<span className='as-span-text' onClick={() => handleToggle(index)} >{value.menuTitle}</span>}
                                            {value.subMenu.length > 0 &&
                                                (value.open ?
                                                    (<IoIosArrowUp className='arrow' onClick={() => handleToggle(index)} />)
                                                    : (<IoIosArrowDown className='arrow' onClick={() => handleToggle(index)} />)
                                                )}
                                        </a>
                                        {value.subMenu.length > 0 && <ul className={value.open ? 'assub-menu' : 'disabled'}>
                                            {
                                                value.subMenu.map((value, index) => (
                                                    <li key={index}>
                                                        <a href={value.subMenuLink}>
                                                            {value.subMenuIcon}
                                                            <span className='as-span-text'>{value.subMenuTitle}</span>
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>}
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default AdminSidebar;