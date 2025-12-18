
import { connectMongoDB } from "./config/mongoDB.config.js"
import User from "./models/User.model.js"
import userRepository from "./repository/user.repository.js"
import express from 'express'

connectMongoDB()

//Crear un servidor web (Express app)
const app = express()


//Habilita a mi servidor a recibir json por body
app.use(express.json())

app.get(
    '/', 
    (request, response) => {
        response.send('Aplicacion ejecutandose correctamente')
    }
)

app.get(
    '/test',
    (request, response) => {
        response.send('Estas testeando el servidor')
    }
)

app.post(
    '/test',
    async (request, response) => {
        /* Request.body es donde se guarda la informacion que nos envia el cliente */
        /* await userRepository.crear() */
        console.log(request.body)
        response.send('Gracias por el objeto!')
    }
)


//Desarrollar un endpoint 
/* 
POST /auth/register
Nos enviaran un username, email, password
Validas
Buscas al usuario con ese email en la DB
Si existe lanzas un error al cliente
Crear el registro en mongo DB usando el user.repository
Responder con un mensaje tipo 'Usuario creado exitosamente'
*/

app.post(
    '/auth/register',
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



app.listen(
    8080, 
    () => {
        console.log('Nuestra app se escucha en el puerto 8080')
    }
)