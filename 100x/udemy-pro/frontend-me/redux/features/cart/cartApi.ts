import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        addToCart :  builder.mutation({
            query : ({productId}) => ({
                url : 'cart/addtocart',
                body : {
                    productId
                },
                method: 'POST',
                credentials : 'include' as const
            })
        })
    })
})

export const {useAddToCartMutation} = cartApi;