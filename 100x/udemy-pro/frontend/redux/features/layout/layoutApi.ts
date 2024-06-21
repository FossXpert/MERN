import { apiSlice } from "../api/apiSlice";


export const layoutApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getHeroData : builder.query({
            query: (type) => ({
                url : `layout/getlayoutbytype/${type}`,
                method : "GET",
                credentials : "include" as const,
            })
        }),
        editLayout : builder.mutation({
            query: ({type,image,title,subtitle,faq,categories}) => ({
                url : `layout/editlayout`,
                body:{
                    type,image,title,subtitle,faq,categories
                },
                method : "PUT",
                credentials : "include" as const,
            })
        }),
    })
})

export const {useGetHeroDataQuery,useEditLayoutMutation} = layoutApi;