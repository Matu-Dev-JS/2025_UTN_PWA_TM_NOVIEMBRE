Crear la class Producto
    Propiedades:
        id: number
        nombre: string
        precio: number
        stock: number

Crear la class ProductoManager
    Propiedades:
        productos: Producto[]

    Metodos:
        agregar(producto: Producto): void
        eliminar(id: number): void
        modificar(id: number, producto: Producto): void
        obtener(id: number): Producto 
        obtenerTodos(): Producto[]