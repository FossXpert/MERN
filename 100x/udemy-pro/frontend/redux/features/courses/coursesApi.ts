import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCourse : builder.mutation({
            query: (data) =>({
                url: 'course/createcourse',
                method: 'POST',
                body : (data),
                credentials: 'include' as const
            })
        }),
        getAllCourse : builder.query({
            query: () =>({
                url: 'course/getallcourse',
                method: 'GET',
                credentials: 'include' as const
            })
        }),
        getSingleCourseById : builder.mutation({
            query: (id) =>({
                url: `course/get-single-course/${id}`,
                method: 'GET',
                credentials: 'include' as const
            })
        }),
        deleteSingleCourse : builder.mutation({
            query: (id) =>({
                url: `course/deletecoursebyid/${id}`,
                method: 'DELETE',
                credentials: 'include' as const
            })
        }),
        editSingleCourse : builder.mutation({
            query: ({id,data}) =>({
                url: `course/updatecourse/${id}`,
                method: 'put',
                body: (data),
                credentials: 'include' as const
            })
        })
    })
})

export const
    {useDeleteSingleCourseMutation,
    useCreateCourseMutation,
    useGetAllCourseQuery,useEditSingleCourseMutation} 
    = courseApi;