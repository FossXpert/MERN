'use client'
import React, { FC, useEffect, useState } from 'react'
import avatarDefault from '../../Profile/profile-pic.png'
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useTheme } from 'next-themes';
import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import Image from 'next/image';
import { Ri4kFill, RiCellphoneLine, RiChatPrivateFill, RiDashboard2Fill, RiEqualizer2Fill, RiReceiptFill, RiVideoChatFill } from 'react-icons/ri';
import { AiOutlineTrademark } from 'react-icons/ai';
import { MenuItem, ProSidebar, Menu } from 'react-pro-sidebar';
import { redirect } from 'next/navigation';


interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}


const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link href={to} passHref>
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        className='flex items-center'
      >
        <div className="flex items-center space-x-2">
          {icon}
          <Typography className='!text-[16px] !font-Poppins'>{title}</Typography>
        </div>
      </MenuItem>
    </Link>
  )
}

const Sidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setLogout(true);
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${theme === "dark" ? "#111C43 !important" : "#decdbd !important"
            }`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#6870fa !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "3px 35px 5px 10px !important",
          opacity: 1,
        },
        "& .pro-menu-item": {
          color: `${theme !== "dark" && "#fff"}`,
        },
      }}
      className="!bg-white dark:bg-[#111C43]"
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0, left: 0, height: "100vh",
          width: isCollapsed ? "10%" : "20%",
          overflowY: "auto"
        }}>
        <Menu iconShape="round">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <BiArrowFromLeft /> : <BiArrowFromRight />}
            style={{
              margin: "0px 0 10px 0",
            }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href="">
                  <h3 className='text-[25px] font-Poppins uppercase dark:text-white text-black'>
                    ELearning
                  </h3>
                </Link>
                {/* <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block">
                        <BiArrowBack className='text-black dark:text-[#ffffffc1]'/>
                      </IconButton> */}
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt=''
                  width={120}
                  height={120}
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "3px solid #5b6f36",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant='h5'
                  className='!text-[20px] text-black dark: text-[#ffffffc1]'
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user.name}
                </Typography>
                <Typography
                  variant='h5'
                  className='!text-[20px] text-black dark: text-[#ffffffc1]'
                  sx={{ m: "10px 0 0 0" }}
                >
                  -{user.role}
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title='Dashboard'
              to='/admin'
              icon={<RiDashboard2Fill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h5'
              sx={{ m: "15px 0 5px 25px" }}
              className='!text-[18px] text-black dark:text-[#ffffffc1] capitalisze :font-[400]'
            >
              {!isCollapsed && "Data"}
            </Typography>
            <Item
              title='users'
              to='admin/users'
              icon={<RiReceiptFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='invoices'
              to='admin/invoices'
              icon={<RiCellphoneLine />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h5'
              sx={{ m: "15px 0 5px 25px" }}
              className='!text-[18px] text-black dark:text-[#ffffffc1] capitalisze :font-[400]'
            >
              {!isCollapsed && "Content"}
            </Typography>
            <Item
              title='Create Course'
              to='admin/create-course'
              icon={<RiVideoChatFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Live Courses'
              to='admin/courses'
              icon={<AiOutlineTrademark />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h5'
              sx={{ m: "15px 0 5px 25px" }}
              className='!text-[18px] text-black dark:text-[#ffffffc1] capitalisze :font-[400]'
            >
              {!isCollapsed && "Customization"}
            </Typography>
            <Item
              title='Hero'
              to='admin/hero'
              icon={<Ri4kFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='FAQ'
              to='admin/faq'
              icon={<RiEqualizer2Fill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Categories'
              to='admin/categories'
              icon={<RiChatPrivateFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h5'
              sx={{ m: "15px 0 5px 25px" }}
              className='!text-[18px] text-black dark:text-[#ffffffc1] capitalisze :font-[400]'
            >
              {!isCollapsed && "Controllers"}
            </Typography>
            <Item
              title='Manage Teams'
              to='admin/team'
              icon={<RiChatPrivateFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h5'
              sx={{ m: "15px 0 5px 25px" }}
              className='!text-[18px] text-black dark:text-[#ffffffc1] capitalisze :font-[400]'
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title='Courses Analytics'
              to='admin/courses-analytics'
              icon={<RiChatPrivateFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Orders Analytics'
              to='admin/orders-analytics'
              icon={<AiOutlineTrademark />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Users Analytics'
              to='admin/users-analytics'
              icon={<AiOutlineTrademark />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h5'
              sx={{ m: "15px 0 5px 25px" }}
              className='!text-[18px] text-black dark:text-[#ffffffc1] capitalisze :font-[400]'
            >
              {!isCollapsed && "Extras"}
            </Typography>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

const AdminSidebar = () => {
  return (
    <div>AdminSidebar
      <Sidebar />
    </div>
  )
}

export default AdminSidebar