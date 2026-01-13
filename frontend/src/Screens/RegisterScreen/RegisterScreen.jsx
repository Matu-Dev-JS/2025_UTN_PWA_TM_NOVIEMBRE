import React from 'react'
import { Link } from 'react-router'
import useForm from '../../hooks/useForm'
import { register } from '../../services/authService'

const RegisterScreen = () => {
    /* Que campos existe en mi formulario y que valor tienen */
    const form_initial_state = {
        username: '',
        password: '',
        email: ''
    }

    async function enviarRegistro (form_state){
        console.log({form_state})
        const response = await register(form_state.username, form_state.password, form_state.email)
        console.log(response)
    }

    const {
        form_state,
        onChangeFieldValue,
        onSubmitForm
    } = useForm(
        {
            initial_form_fields: form_initial_state,
            onSubmit: enviarRegistro
        }
    )
  return (
    <div>
        <h1>Registrate en la aplicacion</h1>
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="username">Nombre de usuario:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={form_state.username} 
                    onChange={onChangeFieldValue} 
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={form_state.password} 
                    onChange={onChangeFieldValue} 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={form_state.email} 
                    onChange={onChangeFieldValue}
                />
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