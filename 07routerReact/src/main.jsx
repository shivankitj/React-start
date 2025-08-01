import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Users from './Components/User/users.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/contact/contact.jsx'
import Github,{gitHubInfoLoader} from './Components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about/' element={<About />}/>
      <Route path='user/' element={<Users/>} >
        <Route path=':userid' element={<Users/>}/>
      </Route>
      <Route 
      loader={gitHubInfoLoader}
      path='github' 
      element={<Github />

      }/>
      <Route path='*' element={<div>Not Found</div>}/>

      {/* <Route path='about/' element={<About />}>
        <Route path=':id' element={<About/>} />
      </Route> */}
     

    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
