import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router.jsx';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import ContextApi from './hook/context/ContextApi.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextApi>
        <RouterProvider router={router} />
      </ContextApi>
    </QueryClientProvider>
  </React.StrictMode>,
)
