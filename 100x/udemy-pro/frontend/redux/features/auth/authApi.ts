import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut, userRegistration } from "./authSlice";


type RegistrationResponse = {
    message: string;
    activationToken: string;
}

type RegistrationData = {

}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // endpoints here
        register: builder.mutation<RegistrationResponse, RegistrationData>({
            query: (data) => ({
                url: "user/registration",
                method: "POST",
                body: data,
                credentials: "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userRegistration({
                            token: result.data.activationToken,
                        })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        activation: builder.mutation({
            query: ({ activation_token, activation_code }) => ({
                url : "user/verify",
                method : "POST",
                body : {
                    authentication_token : activation_token,
                    authentication_code : activation_code
                },
            }),
        }),
        login : builder.mutation({
            query : ({ email,password}) => ({
                url : "user/login",
                method : "POST",
                body : {
                    email,
                    password
                },
                credentials : "include"  as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user : result.data.user
                        })
                    );
                    console.log('data is ',result.data.accessToken);
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        socialAuth : builder.mutation({
            query : ({ email,name,avatar}) => ({
                url : "user/socialAuth",
                method : "POST",
                body : {
                    email,
                    name,
                    avatar
                },
                credentials : "include"  as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.activationToken,
                            user : result.data.user
                        })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        logout : builder.query({
            query : () => ({
                url : "user/logout",
                method : "GET",
                credentials : "include"  as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedOut(
                            
                        )
                    );
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
    }),
});

export const { useLogoutQuery,useRegisterMutation,useActivationMutation ,useLoginMutation,useSocialAuthMutation} = authApi