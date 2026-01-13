import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import useForm from '../../hooks/useForm'
import useRequest from '../../hooks/useRequest'
import { login } from '../../services/authService'

const LoginScreen = () => {
    const navigate = useNavigate()
    const initialLoginForm = {
        email: '',
        password: ''
    }
    const { response, error, loading, sendRequest } = useRequest()

    function logearse (form_state){
        sendRequest(
            () => {
                return login(form_state.email, form_state.password)
            }
        )
    }

    const {
        onChangeFieldValue, 
        onSubmitForm, 
        form_state
    } = useForm({ 
        initial_form_fields: initialLoginForm, 
        onSubmit: logearse 
    })
    
    /* 
    Se ejecuta cada vez que cambie la response
    Checkea si la response esta ok, y si todo esta bien, guarda en el localstorage el auth_token
    */
    useEffect(
        () => {
            if(response && response.ok){
                /* 
                El localstorage es una tabla clave-valor que se guarda en el navegador y permite guardar valores aunque la pagina se recargue 
                Solo permite guardar string
                */
                localStorage.setItem('auth_token', response.data.auth_token)
                navigate('/home')
            }
        }, 
        [response]
    )

  return (
    <div>
        <h1>Inicia sesion</h1>
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={onChangeFieldValue} value={form_state.email} />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" onChange={onChangeFieldValue} value={form_state.password} />
            </div>
            {
                error && <span style={{color: 'red'}}>{error.message}</span>
            }
            {
                response 
                && 
                response.ok 
                && 
                <span style={{color: 'yellowgreen'}}>
                    Te has logueado exitosamente
                </span>
            }
            <button type="submit" disabled={loading || (response && response.ok)}>Iniciar sesion</button>
        </form>
        <span>
            Aun no tienes cuenta? <Link to="/register">Registrate</Link>
        </span>
    </div>
  )
}

export default LoginScreen