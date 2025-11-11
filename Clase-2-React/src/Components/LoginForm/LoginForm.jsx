import React, { useState } from 'react'

const LOGIN_FORM_NAME_FIELDS = {
    EMAIL: 'email',
    PASSWORD: 'password'
}

const LoginForm = () => {

  
    // Extraer la info de los campos y guardarla en un estado
    // Este estado debe tener en tiempo real los datos que hayan en cada campo

    const initial_form_state = {
        [LOGIN_FORM_NAME_FIELDS.EMAIL]: '',
        [LOGIN_FORM_NAME_FIELDS.PASSWORD]: ''
    }

    const [form_state, setFormState] = useState(
        initial_form_state
    )

    function handleChange (event){
        const {name, value} = event.target
        setFormState(
            (prevState) => {
                return {...prevState, [name]: value}
            }
        )
    } 

    return (
        <form>
            <div>
                <label htmlFor="email">Ingresa tu email</label>
                <br/>
                <input 
                    type='email' 
                    name={LOGIN_FORM_NAME_FIELDS.EMAIL} 
                    id="email" 
                    onChange={handleChange}
                    value={form_state[LOGIN_FORM_NAME_FIELDS.EMAIL]}
                />
            </div>
            <div>
                <label htmlFor="password">Ingresa tu contraseña</label>
                <br/>
                <input 
                    type='password' 
                    name={LOGIN_FORM_NAME_FIELDS.PASSWORD} 
                    id="password" 
                    onChange={handleChange}
                    value={form_state[LOGIN_FORM_NAME_FIELDS.PASSWORD]}
                />
            </div>
            <br/>
            <button type='submit'>Iniciar sesion</button>
        </form>
    )
}

export default LoginForm