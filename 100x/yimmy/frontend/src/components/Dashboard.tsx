import { Container, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "./AppBar";
import CourseCard from "./CourseCard";

export default function Dashboard(){
    return (
    <>
    <ResponsiveAppBar/>
    <Container maxWidth='lg'>
        <Typography variant="h4" align="center" style={{marginTop:"50px"}}>
            All Courses
        </Typography>
        <Grid container spacing={5} style={{marginTop:'20px'}}>
        {<CourseCard/>}{<CourseCard/>}{<CourseCard/>}{<CourseCard/>}
        {<CourseCard/>}{<CourseCard/>}{<CourseCard/>}{<CourseCard/>}
        {<CourseCard/>}{<CourseCard/>}{<CourseCard/>}{<CourseCard/>}
        </Grid>
    </Container>
    </>        
    )
}