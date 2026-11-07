import { useState } from 'react'
import { useInventario } from '../hooks/useInventario.js'
import { CATEGORIAS } from '../data/categorias.js'
import FilaProducto from '../components/FilaProducto.jsx'

function Inventario() {
  const { productos } = useInventario()

  // Estado local para la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')

  // Filtrar productos sin modificar el inventario original
  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.tipo === categoriaSeleccionada)
    : productos

  return (
    <section className="pagina-inventario">
      <h2>Inventario de productos</h2>

      {/* Resumen del inventario */}
      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold text-slate-700">
          Resumen del inventario
        </span>

        <span className="w-fit rounded-full bg-sky-700 px-4 py-2 text-sm font-bold text-white">
          {productos.length} productos registrados
        </span>
      </div>

      {/* Filtro por categoría */}
      <div className="mb-6 flex flex-col gap-2 sm:max-w-sm">
        <label
          htmlFor="filtro-categoria"
          className="font-semibold text-slate-700"
        >
          Filtrar por categoría
        </label>

        <select
          id="filtro-categoria"
          value={categoriaSeleccionada}
          onChange={(event) => setCategoriaSeleccionada(event.target.value)}
          className="w-full rounded-lg border border-sky-200 bg-white px-3 py-2 text-slate-800"
        >
          <option value="">Todas las categorías</option>

          {CATEGORIAS.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      {/* Cantidad de resultados */}
      <p className="mb-4 text-sm text-slate-600">
        Mostrando {productosFiltrados.length} de {productos.length} productos
      </p>

      {/* Tabla de productos */}
      {productosFiltrados.length === 0 ? (
        <p>
          {productos.length === 0
            ? 'No existen productos registrados en el inventario.'
            : 'No hay productos disponibles en la categoría seleccionada.'}
        </p>
      ) : (
        <section
          className="inventario-tabla-scroll"
          aria-label="Tabla de inventario con desplazamiento horizontal"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Marca</th>
                <th scope="col">Tipo</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>

            <tbody>
              {productosFiltrados.map((producto) => (
                <FilaProducto
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  )
}

export default Inventario