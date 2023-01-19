import React from 'react'

import './App.css';
import PrivateRoutes from './utils/PrivateRoutes'
import {Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/"/>
      </Routes>
    </AuthProvider>
  )
}

export default App