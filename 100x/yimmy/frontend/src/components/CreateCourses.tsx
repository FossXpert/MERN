import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreateCourses = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {<h3>Create Courses Here</h3>}
        <TextField
          fullWidth
          id="course-title"
          label="Course Title"
          variant="outlined"
        />
        {/* Description */}
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

      {/* Second half */}
      <Grid item xs={12} md={6}>
        {/* Instructor */}
        <TextField
          fullWidth
          id="course-instructor"
          label="Instructor"
          variant="outlined"
        />
        {/* Duration */}
        <TextField
          fullWidth
          id="course-duration"
          label="Duration"
          variant="outlined"
          style={{ marginTop: '1rem' }}
        />
        {/* Price */}
        <TextField
          fullWidth
          id="course-price"
          label="Price"
          variant="outlined"
          style={{ marginTop: '1rem' }}
        />
        {/* Difficulty Level */}
        <TextField
          fullWidth
          id="course-difficulty"
          label="Difficulty Level"
          variant="outlined"
          style={{ marginTop: '1rem' }}
        />
        {/* Submit Button */}
        <Button fullWidth variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Create Course
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateCourses;
