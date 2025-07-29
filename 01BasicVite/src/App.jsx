import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Youtube from './youtube'


function App() {
  const username = 'shivankit'
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vite REact App {2+2}</h1>
        <h1>Vite React app {(username)}</h1>
        <Youtube/>
      </div>
    </>
  )
}

export default App
