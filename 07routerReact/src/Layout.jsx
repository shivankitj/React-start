import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

// Yaha hum Header wala Html return kar rahe hai

function Layout() {
  return (
      <>
      <Header />  
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout