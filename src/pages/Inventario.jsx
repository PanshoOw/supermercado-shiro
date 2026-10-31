import { useInventario } from '../hooks/useInventario.js'

// Formateador de precios en pesos chilenos
const formateadorPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0
})

function Inventario() {
  const { productos } = useInventario()

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

      {/* Tabla de productos */}
      {productos.length === 0 ? (
        <p>No existen productos registrados en el inventario.</p>
      ) : (
        <div
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
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.marca}</td>
                  <td>{producto.tipo}</td>
                  <td>{formateadorPrecio.format(producto.precio)}</td>
                  <td>{producto.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Inventario