'use client'
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authSlice, //yhi se selector value utha rha
    },
    devTools:false,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware)
});

// call the refresh token function on every Page reload
const initializeApp = async() => {
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch:true})); 
    await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch:true}));//calling 2:29:18
}

initializeApp();