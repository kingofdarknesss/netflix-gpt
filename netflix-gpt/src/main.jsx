import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Body from './components/Body.jsx'
import Browse from './components/Browse.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login.jsx'

import appStore from './utils/appStore';
import {  Provider } from "react-redux";







const appRouter=createBrowserRouter([

  {
    path:"/",
    element:<Body/>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
         path:"/browse",
         element: <Browse/>
      },
      
    ],

  },
  
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
