import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateAvatar : builder.mutation({
            query : (avatar) => ({
                url : 'user/updateprofilepic',
                method : "PUT",
                body : {avatar},
                credentials: "include" as const
            })
        }),
        editProfile : builder.mutation({
            query : ({name}) => ({
                url : 'user/updateuser',
                method : "PUT",
                body : {name},
                credentials: "include" as const
            })
        
        }),
        updatePassword : builder.mutation({
            query : ({oldPassword,newPassword}) => ({
                url : 'user/updatepassword',
                method : "PUT",
                body : {oldPassword,newPassword},
                credentials: "include" as const
            })
        }),
        getAllUsers : builder.query({
            query : () => ({
                url : 'user/getalluser',
                method : "GET",
                credentials: "include" as const
            })
        })
    })
})

export const {useUpdateAvatarMutation,useEditProfileMutation,useUpdatePasswordMutation,useGetAllUsersQuery} = userApi;