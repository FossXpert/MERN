import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        addToCart :  builder.mutation({
            query : (id:string) => ({
                url : 'cart/addtocart',
                method: 'POST',
                body : {
                    _id : id
                },
                credentials : 'include' as const
            })
        })
    })
})

export const {useAddToCartMutation} = cartApi;