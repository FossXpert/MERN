import { Box, Button, Modal } from '@mui/material';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useDeleteSingleCourseMutation, useGetAllCourseQuery } from '../../../../redux/features/courses/coursesApi';
import Loader from '../../Loader/Loader';
import toast from 'react-hot-toast';
import { format } from 'timeago.js'
import { styles } from '@/app/styles/style';
import Link from 'next/link';
type Props = {}

const AllCourses = (props: Props) => {

    const { theme, setTheme } = useTheme();
    const [open,setOpen] = useState(false);
    const [courseId,setCourseId] = useState("");
    const [deleteSingleCourse,{isSuccess,error}] = useDeleteSingleCourseMutation({});

    const { isLoading, data,refetch } = useGetAllCourseQuery({},{refetchOnMountOrArgChange:true});

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "title", headerName: "Course Title", flex: 1 },
        { field: "ratings", headerName: "Ratings", flex: 0.5 },
        { field: "purchased", headerName: "Purchased", flex: 0.5 },
        { field: "created_at", headerName: "Created At", flex: 0.5 },
        {
            field: "delete",
            headerName: "Delete",
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button onClick={()=>{
                            setOpen(!open);
                            setCourseId(params.row.id);
                        }}>
                            <AiOutlineDelete
                                className='dark:text-white text-black' size={20} />
                        </Button>
                    </>
                );
            },
        },
        {
            field: "edit",
            headerName: "Edit",
            flex: 0.2,
            renderCell: (params: any) => {
                return (
                    <>
                        <Link href={`/admin/edit-course/${params.row.id}`}>
                            <AiOutlineEdit
                                className='dark:text-white text-black' size={20} />
                        </Link>
                    </>
                );
            },
        },
    ];
    const rows: any = [];

    {
        data && data.Allcourses.forEach((item: any) => {
            rows.push({
                id: item._id,
                title: item.name,
                ratings: item.ratings,
                purchased: item.purchased,
                created_at: format(item.createdAt)
            })
        });
    }

    const handleDelete = async() => {
        const id = courseId;
        await deleteSingleCourse(id);
        toast.success("Handle Delete Clicked");
        setOpen(false)
    }

    useEffect(()=>{
        if(isSuccess){
            refetch();
        toast.success("Course deleted successfully")
        }
        if(error){
            if("data" in error){
                const errorMesage = error as any;
                toast.error(errorMesage.data.message)
            }
        }
    },[isSuccess,error])

    return (
        <div className='mt-[120px]'>
            {
                isLoading ? (
                    <Loader />
                ) :
                    (
                        <Box m="20px">
                            <Box
                                m="40px 0 0 0"
                                height="80vh"
                                sx={{
                                    "& .MuiDataGrid-root": {
                                        border: "none",
                                        outline: "none"
                                    },
                                    "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                                        color: theme === "dark" ? "#fff" : "#000",
                                    },
                                    "& .MuiDataGrid-row": {
                                        color: theme === "dark" ? "#fff" : "#000",
                                        borderBottom:
                                            theme === "dark"
                                                ? `1px solid #ffffff30!important`
                                                : `1px solid #ccc!important`,
                                    },
                                    "& .MuiTablePagination-root": {
                                        color: theme === "dark" ? "#fff" : "#000",
                                    },
                                    "& .MuiDataGrid-cell": {
                                        borderBottom: "none",
                                    },
                                    "& .name-column--cell": {
                                        color: theme === "dark" ? "#fff" : "#000",
                                    },
                                    "& .MuiDataGrid-columnHeader": {
                                        backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                                        borderTop: "none",
                                        color: theme === "dark" ? "#fff" : "#000",
                                    },
                                    "& .MuiDataGrid-virtualScroller": {
                                        backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
                                    },
                                    "& .MuiDataGrid-footerContainer": {
                                        backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
                                        color: theme === "dark" ? "#fff" : "#000",
                                        borderTop: "none",
                                    },
                                    "& .MuiCheckBox-root": {
                                        color: "dark" ? `#b7ede !important` : `#000 !important`,
                                    },
                                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                        color: `#fff !important`
                                    }
                                }}>
                                <DataGrid checkboxSelection rows={rows} columns={columns} />
                            </Box>
                            {
                                open && (
                                    <Modal
                                    open={open}
                                    onClose={()=>setOpen(!open)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    >
                                    <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 translate-y-1/2" >
                                    <h1 className={`${styles.title}`}>
                                    Are You Sure You want to delete this user ?
                                    </h1>
                                    <div className='flex w-full items-center justify-between nb-6 mt-2'>
                                        <div className={`${styles.button} !w-[120px]`}
                                        onClick={()=>setOpen(!open)}>
                                            Cancel
                                        </div>
                                        <div className={`${styles.button} !w-[120px]`}
                                        onClick={handleDelete}>
                                            Delete
                                        </div>
                                    </div>
                                    </Box>   
                                    </Modal>


                                )
                            }
                        </Box>
                    )
            }
        </div>
    )
}

export default AllCourses