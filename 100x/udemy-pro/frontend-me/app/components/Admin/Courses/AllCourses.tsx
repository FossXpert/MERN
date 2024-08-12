import React from 'react'
import {DataGrid} from '@mui/x-data-grid'
import { Box } from '@mui/material'
type Props = {}

const border = 'border border-solid border-black-600'
const AllCourses = (props: Props) => {

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },
    {
      field : "delete",
      headerName : 'Delete',
      flex : 0.2,
     
      }
    ]
  const rows:any = [];
  {
    rows.push({
      id: "item._id",
      title: "item.name",
      ratings: "item.ratings",
      purchased:" item.purchased",
      created_at: "format(item.createdAt)"
  })
  }
  return (
    <>
    <div className={`flex w-full h-full ${border}`}>
      <Box sx={{ height: '100vh', width: '100%' }}>
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </div>
    </>
  )
}

export default AllCourses