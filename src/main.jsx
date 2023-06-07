import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routers/Router';
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <div className='w-[90%] mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,

)
