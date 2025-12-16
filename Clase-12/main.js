import { connectMongoDB } from "./config/mongoDB.config.js"
import User from "./models/User.model.js"
import userRepository from "./repository/user.repository.js"

connectMongoDB()


async function crearUsuario (email, password, username){
    await User.insertOne({
        email,
        password,
        username
    })
    console.log('El usuario se creo con exito')
}

//crearUsuario('pepe@gmail.com', 'pepe123', 'pepe')

/* userRepository.crear('pepe2@gmail.com', 'pepe123', 'pepe') */