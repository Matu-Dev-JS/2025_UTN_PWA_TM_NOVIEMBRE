import React from 'react'

import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
    </Routes>
  )
}

export default App

/* Implementar un enrutador con 2 direcciones, /login y /register */
