import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router.js";
import type { Course } from "@/store/atoms/course.js";
import { NEXT_URL } from "@/config";

function Courses({courses}: {courses: Course[]}) {
    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course => {
            return <Course course={course} />}
        )}
    </div>
}

function Course({course}: {course: Course}) {
    const router = useRouter();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={() => {
                router.push("/course/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>

}

export default Courses;

export async function getServerSideProps() {
    console.log("hit here")
    const response = await axios.get(`${NEXT_URL}/api/admin/courses/`, {
        headers: {
            // Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    console.log(response.data);

    return {
      props: {
        courses: response.data.courses,
      },
    };
  }
  