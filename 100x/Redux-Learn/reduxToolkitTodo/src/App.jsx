import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './app/components/AddTodo'
import SimpleTodo from './app/components/SimpleTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className="read-the-docs">
        Redux TOdo App
        <AddTodo/>
        <SimpleTodo/>
      </h3>
    </>
  )
}

export default App
