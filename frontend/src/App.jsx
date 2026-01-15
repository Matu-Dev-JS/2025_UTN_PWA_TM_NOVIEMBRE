import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import AuthContextProvider from './context/AuthContext'

function App() {


  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route  path='/register' element={<RegisterScreen />} />
        <Route  path='/login' element={<LoginScreen />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
