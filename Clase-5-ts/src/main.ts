class Persona {
  nombre: string;
  apellido: string;

  constructor (nombre: string, apellido: string){
    this.nombre = nombre
    this.apellido = apellido
  }
  /* Tratamos de encapsular los comportamientos de nuestra entidad en metodos */
  presentarme() : void{
    console.log("Hola me llamo " + this.nombre + ' ' + this.apellido)
  }
  saltar(numero_saltos: number): void{
    console.log(this.nombre + ' ha saltado ' + numero_saltos + ' veces')
  }
}
/* Esto seria una mala aplicacion de POO (Programacion orientada a objetos) */
/* 
function presentarPersona (persona: Persona){
  console.log("Hola me llamo " + persona.nombre + ' ' + persona.apellido)
} 
*/


const persona_1 = new Persona('pepe', 'suarez')

/* 
Superpersona es como una persona pero que tiene la propiedad superpoder
Superpersona es compatible con todas las personas, es decir si tenemos alguna funcionalidad que trabaje con Persona, esta es compatible con Superpersona
*/
class Superpersona extends Persona {
  superpoder: string;

  constructor (nombre: string, apellido: string, superpoder: string){
    /* Es el constructor de la clase de la que estamos heredando */
    super(nombre, apellido)
    this.superpoder = superpoder
  }

  /* Polimorfismo */
  /*
    Podemos cambiar el metodo presentarme PERO hay que cumplir una serie de reglas:
    - Los contratos de parametros y devolucion deben ser los mismos que el metodo original
   */
  presentarme(): void {
    console.log("Hola me llamo " + this.nombre + ' ' + this.apellido + ' y tengo el poder de ' + this.superpoder  )
  }
}
const homelander = new Superpersona('homelander', 'ni idea', 'volar')
homelander.presentarme()
persona_1.presentarme()


function workWithPerson (persona: Persona){
  persona.presentarme()
  persona.saltar(10)
}

workWithPerson(persona_1)
workWithPerson(homelander)

