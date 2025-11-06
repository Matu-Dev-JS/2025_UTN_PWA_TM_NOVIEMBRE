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

/* 
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd']) */






/* 
Analisis profe:
    - Analizar cual es el elemento mas largo de el array
    - Crear una funcion llamada dibujarFila(text, maxLength) devolverte la fila correctamente
        dibujarFila('a', 4) => '* a    *'
    - Crear una funcion llamada dibujarFilaBorde(maxLength)
        dibujarFilaBorde(4) => '********'
    - Despues recorrer el array de texto y por cada texto dibujar la fila, luego concatenar todo y sumarle los bordes

RECOMENDACIONES:
    - Usar length para determinar que elemento es el mas largo
    - usar .repeat()
        '-'.repeat(8) => '--------'
        ' '.repeat(8) => '        '
*/




//Esto es un desafio de midudev, si quiren ver mas https://adventjs.dev/




/* let regalos = ['valen', 'guada', 'mati', 'mija'] */
let regalos = ['a', 'bb', 'ccc', 'dddd']


function determinarStringMasLargo (strings){
    let string_mas_largo = ''
    for(let string of strings){
        if(string_mas_largo.length < string.length){
            string_mas_largo = string
        }
    }
    return string_mas_largo
}


function crearFila (string, ancho_maximo){
    let cantidad_espacios_vacios = ancho_maximo - string.length
    return `* ${string + (' '.repeat(cantidad_espacios_vacios))} *`
}

function crearBorde (ancho_maximo){
    return '*'.repeat(ancho_maximo + 4)
}

function crearMarco (strings){
    const string_mas_largo = determinarStringMasLargo(strings)
    let ancho_maximo = string_mas_largo.length

    //Creamos el borde superior
    let resultado = crearBorde(ancho_maximo) + '\n'

    //Crear las filas
    for(let string of strings){
        resultado = resultado + crearFila(string, ancho_maximo) + '\n'
    }

    resultado = resultado + crearBorde(ancho_maximo)
    return resultado
}

console.log(crearMarco(regalos))