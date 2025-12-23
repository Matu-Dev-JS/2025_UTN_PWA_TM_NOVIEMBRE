
import { connectMongoDB } from "./config/mongoDB.config.js"
import User from "./models/User.model.js"
import userRepository from "./repository/user.repository.js"
import express from 'express'
import testRouter from "./routes/test.router.js"
import authRouter from "./routes/auth.router.js"


connectMongoDB()

//Crear un servidor web (Express app)
const app = express()


//Habilita a mi servidor a recibir json por body
app.use(express.json())


app.use('/api/test', testRouter)
app.use("/api/auth", authRouter)



app.listen(
    8080, 
    () => {
        console.log('Nuestra app se escucha en el puerto 8080')
    }
)