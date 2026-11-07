export function inventarioReducer(estado, accion) {
  switch (accion.type) {

    // Registrar un nuevo producto
    case 'AGREGAR_PRODUCTO':
      return {
        ...estado,
        productos: [...estado.productos, accion.producto]
      }

    // Agregar o aumentar una unidad en el carrito
    case 'AGREGAR_AL_CARRITO':
    case 'AUMENTAR_CANTIDAD': {
      const producto = estado.productos.find(
        (articulo) => articulo.id === accion.productoId
      )

      // Comprobar que el producto existe y tiene stock
      if (!producto || producto.stock <= 0) {
        return estado
      }

      // Comprobar si el producto ya existe en el carrito
      const existeEnCarrito = estado.carrito.some(
        (articulo) => articulo.productoId === accion.productoId
      )

      // Descontar una unidad del inventario
      const productosActualizados = estado.productos.map((articulo) =>
        articulo.id === accion.productoId
          ? { ...articulo, stock: articulo.stock - 1 }
          : articulo
      )

      // Actualizar la cantidad del carrito
      const carritoActualizado = existeEnCarrito
        ? estado.carrito.map((articulo) =>
            articulo.productoId === accion.productoId
              ? { ...articulo, cantidad: articulo.cantidad + 1 }
              : articulo
          )
        : [
            ...estado.carrito,
            {
              productoId: accion.productoId,
              cantidad: 1
            }
          ]

      return {
        ...estado,
        productos: productosActualizados,
        carrito: carritoActualizado
      }
    }

    // Disminuir una unidad del carrito
    case 'DISMINUIR_CANTIDAD': {
      const articuloCarrito = estado.carrito.find(
        (articulo) => articulo.productoId === accion.productoId
      )

      // Comprobar que el producto existe en el carrito
      if (!articuloCarrito) {
        return estado
      }

      // Devolver una unidad al inventario
      const productosActualizados = estado.productos.map((articulo) =>
        articulo.id === accion.productoId
          ? { ...articulo, stock: articulo.stock + 1 }
          : articulo
      )

      // Eliminar el artículo si su cantidad llega a cero
      const carritoActualizado = articuloCarrito.cantidad === 1
        ? estado.carrito.filter(
            (articulo) => articulo.productoId !== accion.productoId
          )
        : estado.carrito.map((articulo) =>
            articulo.productoId === accion.productoId
              ? { ...articulo, cantidad: articulo.cantidad - 1 }
              : articulo
          )

      return {
        ...estado,
        productos: productosActualizados,
        carrito: carritoActualizado
      }
    }

    default:
      return estado
  }
}