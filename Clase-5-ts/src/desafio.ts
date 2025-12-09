/* 
Crear la class Item
    -nombre
    -precio
    -id
    -descripcion
    -Mostrar item: Mostrara por consola el mensaje: {nombre} es {descripcion} y cuesta ${precio} Rupias

ItemTienda extends Item
    -stock
    -margen_ganancia
    -setStock(nuevo_stock) y va a guardar el nuevo stock como valor de stock

Crear la class Tienda
    -nombre
    -cantidad_dinero_en_cuenta
    -items: ItemTienda[],
    -id
    -buscarItemPorId(id_item_buscado) 
        -buscar en la lista de items el item buscado y devolvera el mismo, sino devolvera null

    -eliminarPorId(id_item_buscado): true (si elmina) | false (si no elimina)
        -eliminar el item con el id recibido y devolver un boolean de status

    -modificarStockItem(id_item_buscado, cantidad)
        -checkear que la cantidad a decrementar sea menor o igual que el stock del item con el id buscado
        -Si es menor decrementar el stock del item utilizando setStock

    -vender(id_item_a_vender cantidad_vendida) 
        -Buscar el item en la lista de items, si existe lo va a decrementar usando modificarStockItem y incrementara su cantidad de dinero por la (cantidad_vendida * precio * margen_ganancia)
        -Si no hay item con ese id lanzar mensaje de error "Producto no encontrado"
        -Si el stock del item es 0 lanzar mensaje de error "Producto agotado"
    
    -comprar(nuevo_item: Item, cantidad: number, margen_gancia: number)
        -Calcular el costo de la operacion y en caso de ser mayor a la cantidad de dinero en cuenta lanzar un error por consola diciendo, no se puede realizar la operacion, motivo: no hay dinero suficiente
        -Crear un ItemTienda a partir de Item
        -pushear a la lista de items
 */

