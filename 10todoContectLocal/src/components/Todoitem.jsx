import React, { useState } from 'react'
import { useTodo } from '../contexts';


function Todoitem({todo}) {
    const[isTodoEditable,setIsTodoEditable] = useState(false);
    const [todoMsg,setTodoMsg] = useState(todo.todo)

    const {updateTodo,deleteTodo,toggleTodo} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id,{...todo, todo: todoMsg})
        setIsTodoEditable(false);
    }

    const toggleCompleted = () => {
        toggleTodo(todo.id);
    }

  return (
    <div 
    className={`flex border border-black rounded-lg px-3 py-1.5 gap-x-4 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]":"bg-[#176585]"} `}
    >
        <input
        type="checkbox"
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted}
        />

        <input type="text" 
        className={` border outline-none w-full bg-amber-600 m-2 p-1 rounded-lg 
              ${isTodoEditable ? "border-black/10":"border-transparent"} `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        />

        <button 
            className='bg-emerald-400 px-4 py-2 text-lg rounded-r-lg rounded-2xl text-white'

            onClick={() => {
                if(todo.completed) return
                if(isTodoEditable){
                    editTodo()
                }else setIsTodoEditable((prev) => !prev)
            }}
            disabled={todo.completed}

            >{isTodoEditable? "save" : "edit"}
        </button>
        <button className='border-b-2'
        onClick={() => deleteTodo(todo.id)}
        >
            ❌
        </button>
    </div>
  )
}

export default Todoitem