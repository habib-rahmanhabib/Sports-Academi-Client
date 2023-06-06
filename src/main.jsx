import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routers/Router';
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-[90%] mx-auto'>
    <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
)
