import express from 'express'
import testController from '../controllers/test.controller.js'

const testRouter = express.Router()

//GET /api/test/
testRouter.get(
    '/', 
    testController.get
)

export default testRouter


/* 
Implementar la capa de controller en el authRouter
*/