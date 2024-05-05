import { Container, Typography } from "@mui/material";
import ResponsiveAppBar from "./AppBar";
import CourseCard from "./CourseCard";

export default function Dashboard(){
    return (
    <>
        <ResponsiveAppBar/> 
        <Container maxWidth='lg'>
            <Typography variant="h4" align="center">
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
            </Typography>
            
        </Container>
    </>        
    )
}