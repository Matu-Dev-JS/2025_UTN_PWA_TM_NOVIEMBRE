import React from 'react'
import LoginForm from '../Components/LoginForm/LoginForm'
import { Link } from 'react-router'

const LoginScreen = () => {
  return (
    <div>
        <h1>Iniciar sesion</h1>
        <LoginForm/>
        <span>Aun no tienes cuenta? <Link to="/register">Registrate</Link></span>
    </div>
  )
}

export default LoginScreen