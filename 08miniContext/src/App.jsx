import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div>
        <h1>React API</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
