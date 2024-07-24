import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userRegistration } from "./authSlice";

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
            }),
            async onQueryStarted(args,{dispatch,queryFulfilled}){
                try {
                    const {data} = await queryFulfilled;
                    userLoggedIn({
                        accessToken : data.accessToken,
                        user : data.user
                    })
                } catch (error) {
                    
                }
            }
        }),
        signup: builder.mutation({
            query : ({name,email,password}) => ({
                url : 'user/registration',
                method : 'POST',
                body:{
                    name,email,password
                },
                credentials : 'include' as const
            }),
            async onQueryStarted({otp,authToken},{dispatch,queryFulfilled}){
                try {
                    const {data} = await queryFulfilled;
                    dispatch(userRegistration({token : data.activationToken}));
                    console.log("Inside RTK Query Signup: Data is equal to ",data.activationToken)
                } catch (error) {
                    console.log("Inside error");
                    throw error;
                }
            }
        }),
        verification : builder.mutation({
            query : ({otp,authToken}) => ({
                url : 'user/verify',
                method : 'POST',
                body : {
                    authentication_token : authToken,
                    authentication_code : otp
                },
                credentials : 'include' as const
            }),
        }),
        updateUserInfo : builder.mutation ({
            query : ({name}) => ({
                url : 'user/updateuser',
                method : 'PUT',
                body : {
                    name
                },
                credentials : 'include' as const
            })
        })
    })

})

export const  {useLoginMutation,useSignupMutation,useVerificationMutation,useUpdateUserInfoMutation} = authApi;