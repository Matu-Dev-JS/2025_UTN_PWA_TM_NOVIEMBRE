import mongoose from "mongoose"
/* CONEXION CON MONGODB */

const connection_string = 'oculto/UTN_SLACK_TM'

export async function connectMongoDB (){
    try{
        //Bloque de codigo a ejecutar
        await mongoose.connect(
            connection_string
        )
        console.log("Conexion a MongoDB exitosa")
    }
    catch(error){
        console.error("Conexion con MongoDB fallo")
        console.error(error)
    }
    
}

