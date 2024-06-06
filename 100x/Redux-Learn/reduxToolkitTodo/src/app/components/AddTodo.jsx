import React, { useState } from 'react'

//store reducers ye to redux toolkit se aaye hain, 
// useSelector useDispatch React ke hai jo ye bridge provide krte hai 
// redux toolkit ko use krne k liye

import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';


export default function AddTodo() {

    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = async(e) => {
        console.log(input)
        dispatch(addTodo(input));
    }
  return (
    <form onSubmit={addTodoHandler} className='space-x-3-mt-12'>
        <input 
            type='text'
            placeholder='Enter a todo .. '
            value={input}
            onChange={(e)=>setInput(e.target.value)}
         />
         <button type='submit'>submit</button>
    </form>
  )
}
