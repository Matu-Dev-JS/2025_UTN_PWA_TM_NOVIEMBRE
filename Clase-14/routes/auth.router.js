import express from 'express'
import userRepository from '../repository/user.repository.js'

const authRouter = express.Router()


authRouter.post(
    '/register', 
    async (request, response) => {

        try{     

            const {email, password, username} = request.body
            if(!email || !password || !username){
                return response.send('Error: Nombre, email o usuario invalido')
            }

            const user = await userRepository.buscarUnoPorEmail(email)
            if(user){
                return response.send(`Usuario con email ${email} ya registrado`)
            }
    
            await userRepository.crear(email, password, username)
    
            return response.send('Usuario creado exitosamente')
        }
        catch(error){
            console.error('Error al crear usuario:', error)

            return response.send('Error interno del servidor')
        }
    }
)

export default authRouter