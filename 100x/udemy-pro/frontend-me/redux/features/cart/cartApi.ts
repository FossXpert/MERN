import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        addToCart :  builder.mutation({
            query : (id) => ({
                url : 'cart/addtocart',
                method: 'POST',
                body : {
                    id
                },
                credentials : 'include' as const
            })
        })
    })
})

export const {useAddToCartMutation} = cartApi;