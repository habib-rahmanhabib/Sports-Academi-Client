import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import { router } from './Routers/Router';
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <HelmetProvider>
    <React.StrictMode>
      <AuthProvider>
        <div className='w-[90%] mx-auto'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </React.StrictMode>,
  </HelmetProvider>

)
