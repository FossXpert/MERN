// Here we are creating RTK Query dont' confuse it with reducers in authSlice

require('dotenv').config();

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : process.env.NEXT_PUBLIC_SERVER_URI
    }),
    
})