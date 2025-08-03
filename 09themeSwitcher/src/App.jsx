import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/Theme'
import Card from './components/card'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode,setThemeMode] = useState('light');
  const darkTheme = () => {
    setThemeMode('dark');
  }
  const lightTheme = () => {
    setThemeMode('light');
  }

  // Jab bhi hume ek value ke change hone par run karan Hai useEffect Hook ka use karo

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  //In theme Provider created through Context value of theme are assigned
    return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w.sm mx-auto flex justify-enc mb-4'>
            <ThemeBtn/>
          </div>
          <div className='w-full max-w.sm mx-auto '>
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
