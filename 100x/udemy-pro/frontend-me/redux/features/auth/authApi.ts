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
        }),
        verification : builder.mutation({
            query : ({otp}) => ({
                url : '',
                method : 'POST',
                body : {
                    otp
                },
                credentials : 'include' as const
            })
        }),
    })

})

export const  {useLoginMutation,useSignupMutation,useVerificationMutation} = authApi;