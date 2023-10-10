import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRouter from './components/routers/RouterProvider'
import AuthProvider from './components/routers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={MyRouter}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
