import express from 'express'

const testRouter = express.Router()

//GET /api/test/
testRouter.get(
    '/', 
    (request, response) => {
        response.send('Test hecho')
    }
)

export default testRouter