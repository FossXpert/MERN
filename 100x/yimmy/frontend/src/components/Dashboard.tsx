import ResponsiveAppBar from "./AppBar";
import CourseCard from "./CourseCard";

export default function Dashboard(){
    return (
    <>
        <ResponsiveAppBar/> 
        <div style={ {display: "flex", overflowX: "auto" }}>
            <h3>Dashboard</h3>
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
            <CourseCard/><CourseCard/><CourseCard/><CourseCard/>
        </div>
    </>        
    )
}