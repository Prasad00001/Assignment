import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import AdminLogin from './Component/AdminLogin.jsx'
import AdminLoginPage from './Component/AdminLoginPage.jsx'
import CustomerLoginPage from './Component/CustomerLoginPage.jsx'

import './index.css'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<App />} />
    <Route path='/AdminRegister' element={<AdminLoginPage />} />
    <Route path='/CustomerRegister' element={<CustomerLoginPage  />} />
    <Route path='/AdminLogin' element={<AdminLogin />} /></Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
