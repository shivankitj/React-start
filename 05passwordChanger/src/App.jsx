import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed ,setNumberAllowed] = useState(false);
  const [charAllowed ,setCharAllowed] = useState(false);
  const [password , setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed)  str += "!@#$%^&*()_+"

    for(let i=0;i<length;i++){
      const char = (Math.random()*str.length + 1)
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed])  //Dependencies array is their

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  const copyPass = ()=> {
    window.navigator.clipboard.writeText(password)
    
  }

  return (
    <>
      <div className='w-full max-wmd mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl font-bold mb-2  text-center'>Password Generator</h1>
        <div className='flex justify-center align-middle shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text" 
          value={password} 
          className='outline-none bg-amber-50 rounded-md px-4 border-s-orange-300'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPass} className='outline-none rounded-md m-1 bg-orange-500 text-white px-3 py-0.5 shrink-0 '>Copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex text-sm gap-x-2'>
              <input type="range" 
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              name=''
              id=''
              />
              <label htmlFor="length">Length:{length} </label>
            </div>
            <div className='flex text-sm gap-x-2'>
              <input type="checkbox" 
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="number">Number</label>
            </div>
            <div className='flex text-sm gap-x-2'>
              <input type="checkbox" 
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="charInput">Special Character</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
