import React from 'react'
import RegisterForm from '../Components/RegisterForm/RegisterForm'
import { Link } from 'react-router'

const RegisterScreen = () => {
  return (
    <div>
        <h1>Registrate</h1>
        <RegisterForm/>
        <span>Ya tienes cuenta? <Link to="/login">Iniciar sesion</Link></span>
    </div>
  )
}

export default RegisterScreen