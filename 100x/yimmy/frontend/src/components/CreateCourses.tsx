import React, { useEffect } from 'react';
import { Grid, TextField, Button, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import CourseCard from './CourseCard';
import { useRecoilState } from 'recoil';
import { v4 as uuid4 } from 'uuid';
import { atomAdminId, atomCategory, atomCourseDescription, atomCoursePrice, atomCourseTitle, atomImageLink, decodePayload, decodePayloadInterface, getToken } from './atom';
import { zodCourseDetail } from '@rahulray8518/common';
import { useCourseManagementHook } from './CustomHooks';

const CreateCourses = () => {
    
  const {createCourse} = useCourseManagementHook();
  const [isCourseCreated, setIsCourseCreated] = useState(false);
  
  const [title, setTitle]: [string, (title: string) => void] = useRecoilState(atomCourseTitle);
  const [description, setDescription]: [string, (description: string) => void] = useRecoilState(atomCourseDescription);
  const [price, setPrice]: [number, (price: number) => void] = useRecoilState(atomCoursePrice);
  const [category, setCategory]: [string, (category: string) => void] = useRecoilState(atomCategory);
  const [admin_id, setAdminId]: [string, (admin_id: string) => void] = useRecoilState(atomAdminId);
  const [courseId, setCourseId]: [string, (courseId: string) => void] = useState("");
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
    await setRemainItems();
    const courseBody: zodCourseDetail = {
      title, description, price, category, admin_id, courseId, imageLink
    }
    console.log("CourseBody : ",courseBody)
    setIsCourseCreated(true);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <TextField
          fullWidth
          id="course-title"
          label="Course Title"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }}
        />
        <TextField
          fullWidth
          id="course-description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          style={{ marginTop: '1rem' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setDescription(e.target.value) }}
        />
        <TextField
          fullWidth
          id="price"
          label="Course Price"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(parseInt(e.target.value))
          }}
        />
         <TextField
          fullWidth
          id="category"
          label="Categories"
          multiline
          rows={4}
          variant="outlined"
          style={{ marginTop: '1rem' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCategory(e.target.value) }}
        />
        <Button onClick={handleCreateButton}>Create</Button>
      </Grid>
      <Grid item xs={6} md={6}>
        {isCourseCreated && <CourseCard />}
      </Grid>
    </Grid>
  );
};

export default CreateCourses;
