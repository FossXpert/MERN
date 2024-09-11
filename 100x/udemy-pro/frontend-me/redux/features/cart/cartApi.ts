import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        addToCart :  builder.mutation({
            query : ({id}) => ({
                url : 'cart/addtocart',
                body : {
                    _id : id
                },
                method: 'POST',
                credentials : 'include' as const
            })
        })
    })
})

export const {useAddToCartMutation} = cartApi;