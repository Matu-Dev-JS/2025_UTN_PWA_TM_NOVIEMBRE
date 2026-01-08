import React from 'react'
import { Link } from 'react-router'

const LoginScreen = () => {
  return (
    <div>
        <h1>Inicia sesion</h1>
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
        <span>
            Aun no tienes cuenta? <Link to="/register">Registrate</Link>
        </span>
    </div>
  )
}

export default LoginScreen