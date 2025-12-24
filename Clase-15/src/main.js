import express from 'express'
import handlebars from 'express-handlebars'

const app = express()
const PORT = 8080

app.engine('handlebars', handlebars.engine())
app.use(express.static('./public'))

app.set('view engine', 'handlebars')
app.set('views', './views')


const products = [
    {
        id: 1,
        name: "TV samsung 32",
        price: 500,
        description: 'lorem'
    },
    {
        id: 2,
        name: "TV samsung 51",
        price: 4400,
        description: 'lorem'
    },
    {
        id: 3,
        name: "TV samsung 100",
        price: 6000,
        description: 'lorem'
    }

]

app.get(
    '/test', 
    (request, response) => {
        response.render(
            'test',
            {
                layout: 'main',
                username: 'mati',
                isAdmin: true,
                products
            }
        )
    }
)

app.listen(PORT, () => {
    console.log(`La aplicacion se esta ejecutando en el puerto ${PORT}`)
})