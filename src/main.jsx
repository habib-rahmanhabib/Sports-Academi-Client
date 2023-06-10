import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import { router } from './Routers/Router';
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(


  <HelmetProvider>
    <React.StrictMode>
      <AuthProvider>


        <QueryClientProvider client={queryClient}>
          <div className='w-[90%] mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>

      </AuthProvider>
    </React.StrictMode>,
  </HelmetProvider>

)
