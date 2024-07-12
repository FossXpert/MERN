// Here we are creating RTK Query dont' confuse it with reducers in authSlice

require('dotenv').config();
import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.NEXT_PUBLIC_SERVER_URI
    }),
    endpoints:(builder) =>({
        loadUser : builder.query({
            query : (data) => ({
                url : 'user/me',
                method : 'GET',
                credentials : 'include' as const
            }),
        })
    })
})


export const {useLoadUserQuery} = apiSlice;