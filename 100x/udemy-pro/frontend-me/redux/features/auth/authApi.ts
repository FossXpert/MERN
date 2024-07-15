import { apiSlice } from "../api/apiSlice";
export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({email, password}) => ({
                url: 'user/login',
                method: 'POST',
                body: {
                    email, password
                },
                credentials: 'include' as const,
            })
        }),
        signup: builder.mutation({
            query : ({name,email,password}) => ({
                url : 'user/registration',
                method : 'POST',
                body:{
                    name,email,password
                },
                credentials : 'include' as const
            })
        })
    })

})

export const  {useLoginMutation,useSignupMutation} = authApi;