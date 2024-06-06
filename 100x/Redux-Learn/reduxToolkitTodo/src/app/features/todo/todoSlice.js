import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo : sayHello, // Yha hm sayhello function ko reference de rhe , call nahi kr rhe
        // yhi syntax hai aise hi likhte hai, state and action
        // state give access to what changes has been done, because the state obviouslly going to change from initial state
        // and whenever we have to perform any task, action come into play, action do operation 
        // Payload ek object hai, it contian many things,you can use according to u
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            console.log(todo)
            state.todos.push(todo)
        },
        removeTodo: (state,action) => { 
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
        }

    }
})

// export normally nahi hota this is the way how you export it.
// and the changes can only be carried out via the reducers regidtered into your slice
export const {addTodo,removeTodo} = todoSlice.actions;

// Here,you have to also export the list of all reducers

export default todoSlice.reducer;