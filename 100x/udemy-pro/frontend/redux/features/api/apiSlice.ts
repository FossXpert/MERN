require('dotenv').config();
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";

// for calling http calls

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URI
    }),
    endpoints: (builder) => ({
        refreshToken: builder.query({
            query: (data) => ({
                url: "user/refreshtoken",
                method: "GET",
                credentials: "include" as const,
            })
        }),
        loadUser : builder.query({
            query: (data) => ({
                url : 'user/me',
                method : 'GET',
                credentials : "include" as const
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            //wrong code that why commented
                            // accessToken: result.data.activationToken,
                            user : result.data.user
                        })
                    );
                    console.log("result is ",result);
                } catch (error: any) {
                    console.log(error);
                }
            }
        }),
    })
})

export const {useRefreshTokenQuery,useLoadUserQuery} = apiSlice;

