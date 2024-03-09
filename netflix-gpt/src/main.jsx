import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from './components/Body.jsx'
import Browse from './components/Browse.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login.jsx'



const appRouter=createBrowserRouter([

  {
    path:"/",
    element:<Login/>

  },
  {
    path:"/browse",
    element: <Browse/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
