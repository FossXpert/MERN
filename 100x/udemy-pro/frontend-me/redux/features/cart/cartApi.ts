import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        addToCart :  builder.mutation({
            query : (data) => ({
                url : 'cart/addtocart'
            })
        })
    })
})