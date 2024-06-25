import EditCategories from "@/app/components/Admin/Customization/EditCategories";
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
            query: ({type,image,title,subtitle,faq}) => ({
                url : `layout/editlayout`,
                body:{
                    type,image,title,subtitle,faq
                },
                method : "PUT",
                credentials : "include" as const,
            })
        }),
        getAllCategories : builder.query({
            query : ()=>({
                url : 'layout/getallcategory',
                method : "GET",
                credentials : "include" as const
            })
        }),
        editCategory : builder.mutation({
            query : (categories) => ({
                url : 'layout/editCategory',
                body : {
                    categories
                },
                method: "PUT",
                credentials : "include" as const
            })
        })
    })
})

export const {useGetHeroDataQuery,useEditLayoutMutation,useGetAllCategoriesQuery} = layoutApi;