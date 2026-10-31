import { useState, useCallback, useMemo } from 'react'
import { productos as productosIniciales } from '../data/productos.js'
import { InventarioContext } from './InventarioContext.js'

function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales)

  const agregarProducto = useCallback((nuevoProducto) => {
    setProductos((productosAnteriores) => [
      ...productosAnteriores,
      {
        ...nuevoProducto,
        id: crypto.randomUUID()
      }
    ])
  }, [])

  const valorContexto = useMemo(() => ({
    productos,
    agregarProducto
  }), [productos, agregarProducto])

  return (
    <InventarioContext.Provider value={valorContexto}>
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider