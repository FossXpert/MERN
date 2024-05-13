import { Typography,Box,Grid,Card,CardContent,TextField, Button,Container} from "@mui/material";
import CourseCard from "./CourseCard";
import { AppBar2 } from "./AppBar";
import { useCourseManagementHook } from "./CustomHooks";
import { zodCourseDetail } from "@rahulray8518/common";
import { useEffect } from "react";

export default function InstructionLandingPage() {

  const {adminCourses,fetchAdminCourses} = useCourseManagementHook();
  const adminId : string | null = localStorage.getItem('id');
  if(adminId === null) {
    console.log("Admin id is Null in localstorage")
    return;
  }

  useEffect(()=>{
    console.log(adminId)
    fetchAdminCourses(adminId)
  })

  return (
    <>
    <AppBar2/>
    <Box
      sx={{
        backgroundColor: '#edede4', // Change this to the desired background color
        minHeight: '80vh',
        minWidth: '100%',
        paddingX: '2rem',
        paddingY: '2rem',
      }}
    >
      {/* From here the cards of admin start */}
      <Container maxWidth='lg'>
        <Typography variant="h4" align="center" style={{marginTop:"50px"}}>
            All Courses
        </Typography>
        <Grid container spacing={5} style={{marginTop:'20px'}}>
            {adminCourses.map((course:zodCourseDetail)=>(
                <Grid item xs={12} md={4} key={course.courseId}>
                <CourseCard
                title={course.title} description={course.description} image={course.imageLink} price={course.price} 
                onBuy={() => console.log("Buy clicked")} onView={() => console.log("View clicked")}/>
                </Grid>
            ))}
        </Grid>
    </Container>
    {/* And Here It Ends */}
    <Grid spacing={12}>
      <Grid item xs={12} md={4}> 
        <Card>
          <CardContent>
            <Typography variant='h5' component='h2' sx={{ color: 'primary.main', fontWeight: 'bold', marginBottom: '1rem' }}>
              CREATE COURSE
            </Typography>
            <Button variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
              Click here to create courses
            </Button>
        </CardContent>
        </Card> 
      </Grid>
    </Grid>
    </Box>
    </>
  );
}
