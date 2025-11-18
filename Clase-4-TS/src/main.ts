
/* 
Programacion orientada a objetos
Los objetos definen el estado y el comportamiento de nuestro programa
*/

/* 
const math = {
  sumar: function (a: number, b: number): number {
    return a + b;
  },
  restar: function (a: number, b: number): number {
    return a - b;
  }
}

math.sumar(1, 2) 
*/

/* const persona_1 = {
  nombre: 'pepe',
  edad: 40
}

const persona_2 = {
  nombre: 'juan',
  edad: 80
} */

//Cual seria una mejor manera de crear personas?

/* function crearPersona (nombre: string, edad: number){
  return {
    nombre: nombre,
    edad: edad
  }
}

const persona_3 = crearPersona('maria', 67) */


/* 
Un objeto tiene:
  - Propiedades: Definen el estado del objeto
  - Metodos: Definen el comportamiento del objeto
*/

/* 
class nos permite crear objetos 
Las class deben declararse con mayuscula
*/
class Persona {
  /* Tipamos las propiedades de persona (Solo en TS) */
  nombre: string = ''
  edad: number = 0
  nivel: number = 0
  especie: string = 'humano'
  /* El constructor recibe los parametros y con eso construye el objeto */
  constructor(nombre: string, edad: number, nivel_inicial: number = 1) {

    /* 
    This es un objeto que hace referencia al objeto cuando se este instanciando  
    (Al que se cree en el momento)
    */
    this.nombre = nombre
    this.edad = edad
    this.nivel = nivel_inicial
  }

  saludar(nombre: string): void {
    console.log("Hola " + nombre + " me llamo " + this.nombre)
  }
}

//Instaciamos la clase persona
const persona_1 = new Persona('pepe', 40, 3)

persona_1.saludar('juan')

/* 
Crear la clase Empleado
  - nombre
  - salario
  - puesto
  - edad
  - email
Nuevo: 
  Propiedades:
  - anios_antiguedad

  Metodos:
  - incrementarAntiguedad() incrementa la antiguedad en 1
  - cambiarPuesto(nuevo_puesto) cambia el puesto del usuario
  - presentarse() hara una breve presentacion por consola: 'Hola me llamo {nombre} y trabajo como {puesto}. Actualmente mi salario es ${salario}'
  - calcularAguinaldoAprox() Retornara el precio del aguinaldo (salario mas alto (actual en este caso) dividido 2)
*/

/* 
Crear la class Producto
    Propiedades:
        id: number
        nombre: string
        precio: number
        stock: number

Crear la class ProductoManager
    Propiedades:
        productos: Producto[] Es un array de productos

    Metodos:
        agregar(producto: Producto): void
        eliminar(id: number): void
          Usar un splice para eliminar o crear un nuevo array sin el producto
        modificar(id: number, producto: Producto): void
          Buscar posicion del producto por id y remplazar
        obtener(id: number): Producto 
          Buscar producto por id
        obtenerTodos(): Producto[]
*/

class Producto {
  id: number
  nombre: string
  precio: number
  stock: number
  constructor(
    id: number,
    nombre: string,
    precio: number,
    stock: number
  ) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }
}

class ProductoManager {
  productos: Producto[] = []
  constructor(productos: Producto[]) {
    this.productos = productos
  }

  agregar(producto: Producto): void {
    this.productos.push(producto)
  }

  obtener(id_producto: number): Producto | null {
    for (const producto of this.productos) {
      if (producto.id === id_producto) {
        return producto
      }
    }
    return null
  }

  obtenerIndice(id_producto: number): number | null {
    const producto_encontrado = this.obtener(id_producto)
    if (producto_encontrado) {
      const indice = this.productos.indexOf(producto_encontrado)
      return indice
    }
    return null
  }

  eliminar(id_producto: number): void {
    const indice = this.obtenerIndice(id_producto)
    if (indice) {
      this.productos.splice(indice, 1)
    }
  }

  obtenerTodos(): Producto[] {
    return this.productos
  }
  modificar(id_producto: number, nuevo_producto: Producto) {
    const indice = this.obtenerIndice(id_producto)
    if(indice){
      this.productos[indice] = nuevo_producto
    }
  }
}