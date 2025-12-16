import dotenv from "dotenv"
/* Esto carga las variables de entorno del archivo .env en process.env */
dotenv.config()

const ENVIRONMENT = {
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME
}

export default ENVIRONMENT