import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function SimpleTodo() {

    const todos = useSelector(state => state.todos); // ye sare todos hme lake dega array me jo slice me todos likhi hui thi whi hai ye
    const dispatch = useDispatch();
  return (
    <>
    <div>Todo</div>
    {console.log(todos)}
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
        </li>
    ))}
    </>
  )
}

export default SimpleTodo