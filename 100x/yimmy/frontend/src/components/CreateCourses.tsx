import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CourseCard from './CourseCard';
import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { atomAdminId, atomCategory, atomCourseDescription, atomCoursePrice, atomCourseTitle } from './atom';
const CreateCourses = () => {

    const [isCourseCreated,setIsCourseCreated] = useState(false);
    const [title,setTitle]:[string,(title:string)=>void] = useRecoilState(atomCourseTitle);
    const [description,setDescription]:[string,(description:string)=>void]= useRecoilState(atomCourseDescription);
    const [price,setPrice]:[string,(price:string)=>void]= useRecoilState(atomCoursePrice);
    const [category,setCategory]:[string,(category:string)=>void] = useRecoilState(atomCategory);
    const [id,setId]:[string,(id:string)=>void] = useRecoilState(atomAdminId)

    const handleCreateButton = () => {
        setIsCourseCreated(true)
    }
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <TextField
          fullWidth
          id="course-title"
          label="Course Title"
          variant="outlined"
          onChange={(e : React.ChangeEvent<HTMLInputElement> )=> {setTitle(e.target.value)}}
        />
        <TextField
          fullWidth
          id="course-description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          style={{ marginTop: '1rem' }}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => { setDescription(e.target.value)}}
        />
        <TextField
          fullWidth
          id="price"
          label="Course Price"
          variant="outlined"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPrice(e.target.value)}}
        />
        <TextField
          fullWidth
          id="Category"
          label="Course Title"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setCategory(e.target.value)}}
        />
        <Button onClick={handleCreateButton}>Create</Button>
      </Grid>
      <Grid item xs={6} md={6}>
        {isCourseCreated && <CourseCard/>}
      </Grid>
    </Grid>
  );
};

export default CreateCourses;
