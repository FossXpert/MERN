import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({username, password}) => ({
                url: '',
                method: 'POST',
                body: {
                    username, password
                },
                credentials: 'include' as const,
            })
        })
    })
})