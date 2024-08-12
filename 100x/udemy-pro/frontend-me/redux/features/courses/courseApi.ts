import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        createCourse : builder.mutation({
            query : (data) => ({
                url : 'course/createcourse',
                body : (data),
                method : 'POST',
                credentials : 'include' as const
            })
        }),
        getallcourse : builder.query({
            query : () => ({
                url: 'course/getallcourse',
                method: 'GET',
                credentials: 'include' as const
            })
        }),
        deleteSingleCourse : builder.mutation({
            query : (id) => ({
                url : `course/deletecoursebyid/${id}`,
                method : 'DELETE',
                credentials : 'include' as const
            })
        }),
        editSingleCourse : builder.mutation({
            query : ({id,data}) => ({
                url : `course/updatecourse/${id}`,
                body : (data),
                method : 'PUT',
                credentials : 'include' as const
            })
        })
    })
})

export const {useEditSingleCourseMutation,useCreateCourseMutation,useGetallcourseQuery,useDeleteSingleCourseMutation} = courseApi;