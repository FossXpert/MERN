// Process to create
// 1. First we create store.j sand in that we bring configureStore form redux/toolkit
// 2. Then we have to create reducers(reducer kuch bhi nahi bus ek functionality hai), and here reducers can be recognised as the slice File
// 3. We can keep initial value in reducers whaever we like,
// 4. Then we have to create Slice (Slice is just bigger version of reducers) nothing else
// 5. slice ke andar aayenge objects, aur har slice ka ek initail state hota hai
// 6. slice ke anadar inbuilt hai jo aayenge name, initialState, reducers
// 7. reducers ke andar jate hai property and function 
// 8. got to todoSLice and learn ther the next step

import {configureStore} from "@reduxjs/toolkit";
import  todoReducer from './features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})

