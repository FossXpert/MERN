import React, { useEffect } from 'react';
import {Grid,TextField,Select,MenuItem,Button,Typography,Icon,Card,CardContent,Box} from '@mui/material';
import { useState } from 'react';
import CourseCard from './CourseCard';
import { useRecoilState } from 'recoil';
import { v4 as uuid4 } from 'uuid';
import { atomAdminId, atomCategory, atomCourseDescription, atomCourseId, atomCoursePrice, 
atomCourseTitle, atomImageLink } from './atom';
import { zodCourseDetail } from '@rahulray8518/common';
import { useCourseManagementHook } from './CustomHooks';

const CreateCourses = () => {
    
  const {createCourse} = useCourseManagementHook();
  const [isCourseCreated, setIsCourseCreated] = useState(false);
  
  const [title, setTitle]: [string, (title: string) => void] = useRecoilState(atomCourseTitle);
  const [description, setDescription]: [string, (description: string) => void] = useRecoilState(atomCourseDescription);
  const [price, setPrice]: [string, (price: string) => void] = useRecoilState(atomCoursePrice);
  const [category, setCategory]: [string, (category: string) => void] = useRecoilState(atomCategory);
  const [admin_id, setAdminId]: [string, (admin_id: string) => void] = useRecoilState(atomAdminId);
  const [courseId, setCourseId]: [string, (courseId: string) => void] = useRecoilState(atomCourseId)
  const [imageLink, setImageLink]: [string, (imageLink: string) => void] = useRecoilState(atomImageLink);

  const setRemainItems = async() => {
    const newCourseId = uuid4();
    setCourseId(newCourseId);
    const id : string | null= localStorage.getItem('id'); 
    if(id!==null){
        setAdminId(id);
    }else {
        console.log("localstorage id is null");
        return;
    }
  }
    useEffect(()=>{
        setRemainItems();
    },[])


  const handleCreateButton = async() => {
    const intprice = parseInt(price);
    const courseBody: zodCourseDetail = {
      title, description, price:intprice, 
      category, admin_id, courseId, imageLink
    }
    console.log("CourseBody : ",courseBody)
    createCourse(courseBody);
    setIsCourseCreated(true);
  }

  return (

    <Box
      sx={{
        backgroundColor: '#edede4', // Change this to the desired background color
        minHeight: '80vh',
        padding: '2rem',
      }}
    >
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant='h5' component='h2' sx={{ color: 'primary.main', fontWeight: 'bold', marginBottom: '1rem' }}>
              CREATE COURSE
            </Typography>            
        <TextField
          fullWidth
          id="course-title"
          label="Course Title"
          variant="outlined"
          style={{ marginBottom: '1rem' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            { setTitle(e.target.value) }}
        />
        <TextField
          fullWidth
          id="course-description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          style={{ marginBottom: '1rem' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
             { setDescription(e.target.value) }}
        />
        <TextField
          fullWidth
          id="price"
          label="Course Price"
          variant="outlined"
          style={{ marginBottom: '1rem' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value)
          }}
        />
        <Select
          fullWidth
          id="category"
          label="Categoriess"
          variant="outlined"
          value={category}
          style={{ marginBottom: '1rem' }}
          onChange={(e: SelectChangeEvent<string>) => 
            { setCategory(e.target.value) }}
        >
          <MenuItem value="Code">Code</MenuItem>
          <MenuItem value="Design">Design</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
        </Select>
        <TextField
          fullWidth
          id="image"
          label="Image-Link"
          variant="outlined"
          style={{ marginBottom: '1rem' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setImageLink(e.target.value) }}
        />
        <Button onClick={handleCreateButton}>Create</Button>
        </CardContent>
        </Card> 
      </Grid>
      <Grid item xs={6} md={6}>
        {isCourseCreated && <CourseCard />}
      </Grid>
    </Grid>
    </Box>
  );
};

export default CreateCourses;
