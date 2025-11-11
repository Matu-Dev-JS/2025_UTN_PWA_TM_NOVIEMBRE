/* 
Crear el formulario de registro
Capturar y manejar el formulario por medio de useForm
Campos:
    - Username
    - Email
    - Bio (textarea de descripcion)
    - Password
*/

import React, { useState } from 'react';
import useForm from '../../hooks/useForm.jsx';

const REGISTER_FORM = {
    USERNAME: 'register_username',
    EMAIL: 'register_email',
    BIO: 'register_bio',
    PASSWORD: 'register_password'
}
const RegisterForm = () => {
    const initial_registerForm_state = {
        [REGISTER_FORM.USERNAME]: '',
        [REGISTER_FORM.EMAIL]: '',
        [REGISTER_FORM.BIO]: '',
        [REGISTER_FORM.PASSWORD]: ''
    }

    function onSubmitRegisterForm(registerForm_state) {
        console.log('Formulario enviado', registerForm_state);
    }
    const {
        form_state: registerForm_state,
        handleChange,
        handleSubmit
    } = useForm(initial_registerForm_state, onSubmitRegisterForm);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="registerusername">Ingresa tu nombre</label>
                <br />
                <input
                    type='registerusername'
                    name={REGISTER_FORM.USERNAME}
                    id="registerusername"
                    onChange={handleChange}
                    value={registerForm_state[REGISTER_FORM.USERNAME]} />
            </div>
            <div>
                <label htmlFor="registeremail">Ingresa tu email</label>
                <br />
                <input
                    type='registeremail'
                    name={REGISTER_FORM.EMAIL}
                    id="registeremail"
                    onChange={handleChange}
                    value={registerForm_state[REGISTER_FORM.EMAIL]} />
            </div>
            <div>
                <label htmlFor="registerbio">Breve descripcion</label>
                <br />
                <input
                    type='registerbio'
                    name={REGISTER_FORM.BIO}
                    id="registerbio"
                    onChange={handleChange}
                    value={registerForm_state[REGISTER_FORM.BIO]} />
            </div>
            <div>
                <label htmlFor="registerpassword">Ingresa tu contraseña</label>
                <br />
                <input
                    type='registerpassword'
                    name={REGISTER_FORM.PASSWORD}
                    id="registerpassword"
                    onChange={handleChange}
                    value={registerForm_state[REGISTER_FORM.PASSWORD]} />
            </div>
            <br />
            <button type='submit'>Registrarse</button>
        </form>
    )
}
export default RegisterForm