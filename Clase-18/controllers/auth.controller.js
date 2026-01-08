import ENVIRONMENT from "../config/environment.config.js"
import userRepository from "../repository/user.repository.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mail_transporter from "../config/mail.config.js"

class AuthController {
    async register (request, response) {

        try{     

            const {email, password, username} = request.body

            if(!email || !password || !username){
                return response.json(
                    {
                        message: 'Error: Nombre, email o usuario invalido',
                        status: 400,
                        data: null,
                        ok: false
                    }
                )
            }

            const user = await userRepository.buscarUnoPorEmail(email)
            if(user){
                return response.json(
                    {
                        ok: false,
                        message: 'El email ya esta registrado',
                        status: 400,
                        data: null
                    }
                )
                
            }
            let hashed_password = await bcrypt.hash(password, 10)
            await userRepository.crear(email, hashed_password, username)

            const verification_email_token = jwt.sign(
                {
                    email: email //Guardamos el email del usuario que se quiere registrar
                },
                ENVIRONMENT.JWT_SECRET_KEY/* ,
                {
                    expiresIn: '7d'
                } */
            )

            mail_transporter.sendMail(
                {
                    from: ENVIRONMENT.GMAIL_USERNAME,
                    to: email,
                    subject: 'Verifica tu email',
                    html: `
                    <h1>Bienvenido ${username}</h1>
                    <p>Necesitamos que verifiques tu mail</p>
                    <p>Haz click en "Verificar" para verificar este mail</p>
                    <a 
                    href='http://localhost:8080/api/auth/verify-email?verification_email_token=${verification_email_token}'
                    >Verificar</a>
                    <br>
                    <span>Si desconoces este registro desestima este mail</span>
                    `
                }
            )
    
            return response.json({
                message:'Usuario creado exitosamente', 
                status: 201, 
                ok: true, 
                data: null
            })
        }
        catch(error){
            console.error('Error al crear usuario:', error)

            return response.send({
                message:'Error interno del servidor', 
                status: 500, 
                ok: false, 
                data: null
            })
        }
    }

    async login (request, response){
        const {email, password} = request.body
        /* 
        Aplicar validaciones sobre el email y la password
        */
        if(!email){
            return response.json({
                ok: false,
                message: 'Debes enviar un email',
                status: 400,
                data: null
            })
        }
        else if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))){
            return response.json({
                ok: false,
                status: 400,
                message: 'El email no es valido', 
                data: null
            })
        }

        const usuario_encontrado = await userRepository.buscarUnoPorEmail(email)

        if(!usuario_encontrado){
            return response.json(
                {
                    message: 'Credenciales invalidas', 
                    status: 401, 
                    ok: false,
                    data: null
                }
            )
        }

        if( !( await bcrypt.compare(password, usuario_encontrado.password) ) ){
            /* Respondemos igual a que si no existiese para mayor seguridad */
            return response.json(
                {
                    message: 'Credenciales invalidas',
                    status: 401, 
                    ok: false,
                    data: null
                }
            )
        }

        if(!usuario_encontrado.email_verified){
            return response.json(
                {
                    status: 401,
                    message: 'Usuario con email no verificado',
                    ok: false,
                    data: null
                }
            )
        }

        const datos_del_token = {
            username: usuario_encontrado.username,
            email: usuario_encontrado.email,
            id: usuario_encontrado.id
        }


        const auth_token = jwt.sign(datos_del_token, ENVIRONMENT.JWT_SECRET_KEY)
        return response.json({
            message: 'Inicio de sesion exitoso',
            ok: true,
            status: 200,
            data: {
                auth_token: auth_token
            }
        })
    }

    async verifyEmail (request, response){
        try{
            const {verification_email_token} = request.query

            if(!verification_email_token){
                return response.json(
                    {
                        status: 400,
                        message: 'Debes enviar el token de verificacion',
                        ok: false,
                        data: null
                    }
                )
            }

            const { email } = jwt.verify(
                verification_email_token, 
                ENVIRONMENT.JWT_SECRET_KEY
            )

            const user_found = await userRepository.buscarUnoPorEmail(email)

            if(!user_found){
                return response.json(
                    {
                        status: 404,
                        message: 'No existe usuario con ese mail, prueba volver a registrarte',
                        ok: false,
                        data: null
                    }
                )
            }

            if(user_found.email_verified){
                return response.json({
                    status: 400,
                    message: 'Usuario ya verificado',
                    ok: false,
                    data: null
                })
            }

            await userRepository.actualizarPorId(
                user_found._id,
                {
                    email_verified: true
                }
            )
            return response.json(
                {
                    ok: true,
                    status: 200,
                    message: "usuario verificado",
                    data: null
                }
            )
            /* 
            Redireccionar al frontend
            return response.redirect(
                'http://localhost:3000'
            ) 
            */
        }
        catch(error){
            if(error instanceof jwt.JsonWebTokenError){
                return response.json(
                    {
                        status: 400,
                        message: 'Token de verificacion invalido',
                        ok: false,
                        data: null
                    }
                )
            }

            return response.send({
                message:'Error interno del servidor', 
                status: 500, 
                ok: false, 
                data: null
            })
        }
    }
}

const authController = new AuthController()
export default authController



/* 
condicion sobre una variable
un bucle de 100 a 1000 registros (donde no se consulta a ningun servicio externo)
una consulta a DB (Debatible porque si la DB tiene millones de registros puede ser mas costoso)
una consulta a otro servidor
*/

