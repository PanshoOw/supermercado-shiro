import { useReducer, useCallback, useMemo } from 'react'
import { productos as productosIniciales } from '../data/productos.js'
import { inventarioReducer } from '../reducers/inventarioReducer.js'
import { InventarioContext } from './InventarioContext.js'

// Estado inicial del supermercado
const estadoInicial = {
  productos: productosIniciales,
  carrito: []
}

function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(inventarioReducer, estadoInicial)

  // Registrar un nuevo producto
  const agregarProducto = useCallback((nuevoProducto) => {
    dispatch({
      type: 'AGREGAR_PRODUCTO',
      producto: {
        ...nuevoProducto,
        id: crypto.randomUUID()
      }
    })
  }, [])

  // Agregar una unidad al carrito
  const agregarAlCarrito = useCallback((productoId) => {
    dispatch({
      type: 'AGREGAR_AL_CARRITO',
      productoId
    })
  }, [])

  // Aumentar la cantidad de un producto
  const aumentarCantidad = useCallback((productoId) => {
    dispatch({
      type: 'AUMENTAR_CANTIDAD',
      productoId
    })
  }, [])

  // Disminuir la cantidad de un producto
  const disminuirCantidad = useCallback((productoId) => {
    dispatch({
      type: 'DISMINUIR_CANTIDAD',
      productoId
    })
  }, [])

  // Compartir el estado y sus operaciones
  const valorContexto = useMemo(() => ({
    productos: estado.productos,
    carrito: estado.carrito,
    agregarProducto,
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad
  }), [
    estado.productos,
    estado.carrito,
    agregarProducto,
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad
  ])

  return (
    <InventarioContext.Provider value={valorContexto}>
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider