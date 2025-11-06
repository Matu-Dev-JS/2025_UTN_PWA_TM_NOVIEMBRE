/* 

function sumar (a, b){
    return a + b
}

function doSomething (fn){
    console.log(fn(4, 4))
}

doSomething(sumar)

const btnClick = document.getElementById('btn-click')

function dummy (){
    console.log('hola mundo')
}

btnClick.addEventListener(
    'click',
    dummy
)


function rara (nombre){
    nombre()
}





rara(
    sumar(4, 4)
)





function determinarSuerte (tengoSuerte, noTengoSuerte){
    //Crea un numero aleatorio entre 0 y 1
    let numero_random = Math.random() 
    if(numero_random > 0.5){
        tengoSuerte()
    }
    else{
        noTengoSuerte()
    }
} */


//Spread operator
//Clonar objetos o arrays / Propagar sus propiedades/elementos


/* let persona_1 = {
    nombre: 'pepe'
}

let persona_2 = {...persona_1} //Crea un nuevo objeto con las propiedades de el objeto persona_1

persona_2.nombre = 'joaquin'

console.log(persona_1.nombre)
console.log(persona_2.nombre)

let notas = [1, 4, 10]

let notas_2 = [...notas]

notas_2.push(5)

console.log(notas)
 */
/* function sumar(a, b){
    return a + b
}


const params = [10, 20]

//Propagamos de forma ordenada los elementos de la lista de parametros
console.log(sumar(...params)) */


/* 
let params = {
    a: 20,
    b: 30
} */

/* 
Desetructuracion de variables
function sumar(params) {
    let {a, b} = params
    return a + b
} 
*/

//Desestructuracion de parametros
/* function sumar({a, b}) {
    return a + b
} 

sumar(params) */

/* function useState(intial_value){
    let state = intial_value
    function setState (new_value){
        state = new_value
        render()
    }
    return [
        state,
        setState
    ]
}

const [isOpen, setIsOpen] = useState() */