import {sumar} from './math.js'
import filesystem from 'fs'



/* filesystem.writeFileSync(
    'test.txt', //Nombre archivo
    'Mi primer archivo creado con node.js', //Contenido
    {encoding: 'utf-8'}//Codificacion
) */

/* let content = filesystem.readFileSync(
    'math.js',
    {encoding: 'utf-8'}
)

function getVersion (){
    let packageJSON = filesystem.readFileSync(
        'package.json',
        {encoding: 'utf-8'}
    )
    const objeto = JSON.parse(packageJSON)
    return objeto.version
}

console.log(getVersion()) */

/* let contenido = filesystem.readFileSync('archivo-grande.txt', {encoding: 'utf-8'})
if(contenido){
    console.log('El archivo grande fue leido')
}

let contenido_2 = filesystem.readFileSync('archivo-chico.txt', {encoding: 'utf-8'})
if(contenido_2){
    console.log('El archivo chico fue leido')
} */

async function procesarArchivoTxt (nombre_archivo){
    let contenido = await filesystem.promises.readFile(nombre_archivo, {encoding: 'utf-8'})
    console.log('procesamos el archivo: ' + nombre_archivo)
}

procesarArchivoTxt('archivo-grande.txt')
procesarArchivoTxt('archivo-chico.txt')

/* 
Crear (a mano) los archivos y colocar un numero random positivo:
numero_1.txt
numero_2.txt

Crear una funcion llamada sumarDesdeArchivos que lea el numero_1.txt y el numero_2.txt, sume los numeros leidos y guarde el resultado en resultado.txt
*/