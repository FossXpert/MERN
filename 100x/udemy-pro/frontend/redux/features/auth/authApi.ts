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
                url: "registration",
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
                url : "verify",
                method : "POST",
                body : {
                    authentication_token : activation_token,
                    authentication_code : activation_code
                },
            }),
        }),
        login : builder.mutation({
            query : ({ email,password}) => ({
                url : "login",
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
                            accessToken: result.data.activationToken,
                            user : result.data.user
                        })
                    );
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
        socialAuth : builder.mutation({
            query : ({ email,name,avatar}) => ({
                url : "socialAuth",
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
                url : "logout",
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