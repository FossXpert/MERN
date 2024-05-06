import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CourseCard from './CourseCard';
import { Button } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
const CreateCourses = () => {

    const [isCourseCreated,setIsCourseCreated] = useState(false);
    const [title,setTitle] = useRecoilValue()
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

        />
        <TextField
          fullWidth
          id="course-description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          style={{ marginTop: '1rem' }}
        />
        <TextField
          fullWidth
          id="price"
          label="Course Price"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="Category"
          label="Course Title"
          variant="outlined"
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
