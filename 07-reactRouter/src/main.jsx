import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import Layout from './Layout.jsx'
import './index.css'
import About from './components/About/About'
import Home from './components/Home/Home'


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

      
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
