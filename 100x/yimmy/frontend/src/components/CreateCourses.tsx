import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
const CreateCourses = () => {
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
      </Grid>
      <Grid item xs={6} md={6}>
        
      </Grid>
    </Grid>
  );
};

export default CreateCourses;
