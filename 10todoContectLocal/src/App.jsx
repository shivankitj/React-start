import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoProvider } from './contexts'
import './App.css'
import { TodoForm, Todoitem } from './components'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    //String ke case pe spread nahi kar sakte par Yaha objects hai isliye spread kar diya
      setTodos(  (prev) => [{id:Date.now(), ...todo},...prev]   )
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => (todo.id !== id)))
  }

  const toggleTodo = (id) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      prevTodo.id === id
        ? { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo
    )
  )
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[]) // adding todos as dependicies arraythis will run again after update
  //We want to run it at first start  

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
      <div className='bg-[#172842] py-8 '></div>
        <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 text-white'>
          <h1 className='text-2xl font-bold mb-4'>Manage Your Todos</h1>
          <div className='mb-4'>
            <TodoForm/>
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {
              todos.map((todo)=> (
                <div key={todo.id}>
                  <Todoitem todo={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      
    </TodoProvider>
  )
}

export default App
