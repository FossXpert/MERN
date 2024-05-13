import { Container, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "./AppBar";
import { useCourseManagementHook } from "./CustomHooks";
import CourseCard from "./CourseCard";
import { zodCourseDetail } from "@rahulray8518/common";

export default function Dashboard(){
    const {courses} = useCourseManagementHook();
    return (
    <>
    <ResponsiveAppBar/>
    <Container maxWidth='lg'>
        <Typography variant="h4" align="center" style={{marginTop:"50px"}}>
            All Courses
        </Typography>
        <Grid container spacing={5} style={{marginTop:'20px'}}>
            {courses.map((course:zodCourseDetail)=>(
                <Grid item xs={12} md={4} key={course.courseId}>
                <CourseCard
                title={course.title} description={course.description} image={course.imageLink} price={course.price} 
                onBuy={() => console.log("Buy clicked")} onView={() => console.log("View clicked")}/>
                </Grid>
            ))}
        </Grid>
    </Container>
    </>        
    )
}