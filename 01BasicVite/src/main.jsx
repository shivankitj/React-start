import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Myapp(){
  return (
    <div>
      <h1>Custom React APP</h1>
    </div>
  )
}

const AnotherElement =(
  <a href="https://google.com" target='blank'>Visit Google</a>
)

const areactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: "blank"},
  'click to visit google',
  ""
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
   
  </StrictMode> ,
  // Myapp()
  // AnotherElement
  // areactElement
)
