import { connectMongoDB } from "./config/mongoDB.config.js"
import User from "./models/User.model.js"

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