/* 
Typescript:
- Te permite declarar contratos de tipo (Me refiero a poder typear las variables) explicitos.
- Te ayuda a detectar errores en tiempo de compilacion.
- Te obliga a pensar en los tipados, contratos y mantener un cierto nivel basico de calidad de codigo.
*/



let nombre_1 : string = 'pepe'

function sumar () : number{
  let numero_1 : string | null = prompt('Ingresa el numero')
  let numero_2 : string | null = prompt('Ingresa el numero')
  return Number(numero_1) + Number(numero_2)
}

let isOpen : boolean = true

//Aca typescript esta usando inferencia
//Es como un tipado implicito, ya que se asigna automaticamente
//YO recomiendo no usar inferencia en principio, cuando esten mas cancheros ahi pueden usarla
//let isClose = false


function calcularIva (precio: number): number {
  return precio * 0.21
}

//Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

function contarHasta(numero: number): void {
  
  for (let contador = 1; contador <= numero; contador = contador + 1) {
    
      console.log(contador);
  }
}

//Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

function alturaMedia() {
  let sumatoria : number = 0
  for (let i : number = 0; i < 5; i = i + 1){
    let altura : string | null = prompt("Ingrese altura")
    sumatoria = sumatoria +  Number(altura)
  }
  console.log('El promedio de altura es: ' + sumatoria / 5)
}



/* 
29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

datos con los cuales deben ser enviados a la función

puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true


*/

/* function puedeVerPelicula (edad : number, tieneAutorizacion : boolean) : boolean {
  return edad >= 15 || tieneAutorizacion
}

function esMayor(edad: number): boolean{
  return edad >= 18
} */

const nombres :string[] = ['pepe', 'maria']

const persona : [string, number] = ['pepe', 30] 


interface Persona {
  nombre: string, 
  edad: number,
  id: number
}

const persona_1 : Persona = {
  nombre: 'pepe',
  edad: 40,
  id: 50
}

const persona_2 : {
  nombre: string,
  edad: number,
  id: number
} = {
  nombre: 'pepe',
  edad: 40,
  id: 50
}

const persona_3 : Persona = {
  nombre: 'pepe',
  edad: 40,
  id: 50
}

const personas : Persona[] = [
  persona_1,
  persona_2,
  persona_3
]

/* 1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

2)
Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.

3)
Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.
 
4) 
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

5)
Mediante el uso del método indexOf y splice, desarrollar una función que reciba un array de strings y un stringEliminar, la misma función nos devolverá un array sin el elemento que se eliminó. En caso de no tener el elemento a eliminar se deberá retornar null.

6) Dado un array de strings y un stringBuscado, elaborar una función que retorne la cantidad de veces que apareció en el array el stringBuscado.

*/ 

function eliminarPalabra(palabras : string[], aEliminar : string) : string[] | null {
  let aEliminarIndice : number = palabras.indexOf(aEliminar)
  if (aEliminarIndice === -1){
    return null
  }
  let palabrasAux : string[] = [...palabras]
  return palabrasAux.splice(aEliminarIndice, 1)
}

function cantidadVecesBuscado (strings: string[], stringBuscado : string) : number{
  let cantidadVeces = 0
  for (const string of strings){
    if (string === stringBuscado){
      cantidadVeces = cantidadVeces + 1
    }
  }
  return cantidadVeces
}
