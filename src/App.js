import React from 'react'

import './App.css';
import PrivateRoutes from './utils/PrivateRoutes'
import {Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element = {<LoginPage/>}/>
      </Routes>
      <ToastContainer/>
    </AuthProvider>
  )
}

export default App