import { Box, Button } from '@mui/material';
import { useTheme } from 'next-themes'
import React, { FC, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Loader from '../../Loader/Loader';
import toast from 'react-hot-toast';
import {format} from 'timeago.js' 
import { useGetAllUsersQuery } from '../../../../redux/features/user/userApi';
import { MdEmail } from 'react-icons/md';
import { styles } from '../../../styles/style';

type Props = {
    isTeam:boolean;
}

const AllUsers:FC<Props> = ({isTeam}) => {

    const {theme,setTheme} = useTheme();
    const {isLoading,data,error} = useGetAllUsersQuery({});

    useEffect(()=>{
        if(error){
            if("data" in error){
                const errorData = error as any;
                toast.error(errorData.data.message)
            }
        }
        console.log("data is : ", JSON.stringify(data));
    },[error]);

    const columns = [
        { field : "id", headerName: "ID", flex : 0.5},
        { field : "title", headerName: "Name", flex : 0.5},
        { field : "email", headerName: "Email", flex : 0.5},
        { field : "role", headerName: "Role", flex : 0.5},
        { field : "courses", headerName: "Purchased Courses", flex : 0.5},
        { field : "created_at", headerName: "Joined At", flex : 0.5},
        {
            field: "delete",
            headerName:"Delete",
            flex: 0.2,
            renderCell : (params:any) => {
                return (
                    <>
                    <Button>
                        <AiOutlineDelete
                        className='dark:text-white text-black' size={20}/>
                    </Button>
                    </>
                );
            },
        },
        {
            field: "email",
            headerName:"Email",
            flex: 0.2,
            renderCell : (params:any) => {
                return (
                    <>
                    <a href={`mailto:${params.row.email}`}>
                        <MdEmail
                        className='dark:text-white text-black' size={20}/>
                    </a>
                    </>
                );
            },
        },
    ];
    const rows:any = [];

    if(isTeam){
        const newData = data && data.users.filter((item:any) => item.role === 'admin');
        newData && newData.forEach((item:any) => {
            rows.push({
                id: item._id,
                title: item.name,
                email: item.email,
                role: item.role,
                courses : item.courses.length,
                created_at : format(item.createdAt)
            })
        });
    }else{
        data && data.users.forEach((item:any) => {
            rows.push({
                id: item._id,
                title: item.name,
                email: item.email,
                role: item.role,
                courses : item.courses.length,
                created_at : format(item.createdAt)
            })
        });
    }
  return (
    <div className='mt-[120px]'>
        {
            isLoading ? (
                <Loader/>
            ) : 
            (
            <Box m="20px">x
            <div className='w-full flex justify-end'>
                <div className={`${styles.button1}  `}>

                </div>
            </div>
            <Box
            m="40px 0 0 0"
            height="80vh"
            sx={{
                "& .MuiDataGrid-root":{
                    border : "none",
                    outline : "none"
                },
                "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{
                    color:theme === "dark" ? "#fff":"#000",
                },
                "& .MuiDataGrid-row":{
                    color:theme === "dark" ? "#fff":"#000",
                    borderBottom:
                        theme === "dark"
                            ? `1px solid #ffffff30!important`
                            : `1px solid #ccc!important`,
                },
                "& .MuiTablePagination-root": {
                    color:theme === "dark" ? "#fff":"#000",
                },
                "& .MuiDataGrid-cell" :{
                    borderBottom:"none",
                },
                "& .name-column--cell":{
                    color:theme === "dark" ? "#fff":"#000",
                },
                "& .MuiDataGrid-columnHeader":{
                    backgroundColor : theme === "dark" ? "#3e4396":"#A4A9FC",
                    borderTop:"none",
                    color:theme === "dark" ? "#fff":"#000",
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor : theme === "dark" ? "#1F2A40":"#F2F0F0",
                },
                "& .MuiDataGrid-footerContainer":{
                    backgroundColor : theme === "dark" ? "#3e4396":"#A4A9FC",
                    color:theme === "dark" ? "#fff":"#000",
                    borderTop:"none",
                },
                "& .MuiCheckBox-root":{
                    color:"dark"? `#b7ede !important` : `#000 !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color:`#fff !important`
                }
            }}>
            <DataGrid checkboxSelection rows={rows} columns={columns} />
            </Box>
            </Box>
        )
        }
    </div>
  )
}

export default AllUsers