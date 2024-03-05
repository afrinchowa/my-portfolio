import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto bg-[#0a1d29]  text-white'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)

// bg-[url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 