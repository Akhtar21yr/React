import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import Layout from './Layout.jsx'
import './index.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'




const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children: [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path:"contact",
        element : <Contact/>
      },
      {
        path:"user/:id",
        element : <User/>
      },
      {
        path : "github",
        element : <Github/> ,
        loader : githubInfoLoader
      }

      
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
