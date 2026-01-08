import React from 'react'
import { Link } from 'react-router'

const RegisterScreen = () => {
  return (
    <div>
        <h1>Registrate en la aplicacion</h1>
        <form>
            <div>
                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <button type="submit">Registrarse</button>
        </form>
        <span>
            Ya tienes una cuenta? <Link to="/login">iniciar sesion</Link>
        </span>
    </div>
  )
}

export default RegisterScreen