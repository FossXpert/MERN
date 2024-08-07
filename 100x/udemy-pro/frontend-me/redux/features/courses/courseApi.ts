import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        createCourse : builder.mutation({
            query : (data) => ({
                url : 'user/createcourse',
                body : (data),
                method : 'POST',
                credentials : 'include' as const
            })
        })
    })
})

export const {useCreateCourseMutation} = courseApi;