import userRepository from "../repository/user.repository.js"

class AuthController {
    async register (request, response) {

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
}

const authController = new AuthController()
export default authController