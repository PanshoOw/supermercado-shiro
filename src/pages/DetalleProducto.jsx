import { Link, useParams } from 'react-router'
import { useInventario } from '../hooks/useInventario.js'
import { formatearPrecio } from '../utils/formatearPrecio.js'

function DetalleProducto() {
  const { id } = useParams()

  const { productos, carrito, agregarAlCarrito } = useInventario()

  // Buscar el producto correspondiente a la URL
  const producto = productos.find(
    (articulo) => articulo.id === id
  )

  // Consultar cuántas unidades existen en el carrito
  const articuloCarrito = carrito.find(
    (articulo) => articulo.productoId === id
  )

  const cantidadEnCarrito = articuloCarrito?.cantidad ?? 0

  // Mostrar un mensaje si el producto no existe
  if (!producto) {
    return (
      <section className="pagina-informativa">
        <h2>Producto no encontrado</h2>

        <p>
          El artículo solicitado no existe en nuestro inventario.
        </p>

        <Link
          to="/inventario"
          className="mt-6 inline-block rounded-lg bg-[#17324D] px-5 py-3 font-semibold text-white hover:bg-[#246B9B]"
        >
          Volver al inventario
        </Link>
      </section>
    )
  }

  return (
    <section className="pagina-informativa">
      <h2>Detalle del producto</h2>

      <div className="mx-auto w-full max-w-xl rounded-xl border border-sky-200 bg-sky-50 p-6 text-left shadow-sm">

        <h3 className="mb-6 text-2xl font-bold text-[#17324D]">
          {producto.nombre}
        </h3>

        {/* Información del producto */}
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <dt className="text-sm font-semibold text-slate-600">
              Marca
            </dt>
            <dd className="mt-1 text-lg text-slate-900">
              {producto.marca}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold text-slate-600">
              Categoría
            </dt>
            <dd className="mt-1 text-lg text-slate-900">
              {producto.tipo}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold text-slate-600">
              Precio
            </dt>
            <dd className="mt-1 text-lg font-bold text-sky-900">
              {formatearPrecio(producto.precio)}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold text-slate-600">
              Stock disponible
            </dt>
            <dd className="mt-1 text-lg text-slate-900">
              {producto.stock} unidades
            </dd>
          </div>

        </dl>

        {/* Estado del producto */}
        <p className="mt-6 font-semibold text-[#17324D]">
          {producto.stock > 0
            ? 'Producto disponible'
            : 'Producto sin stock'}
        </p>

        {/* Agregar una unidad al carrito */}
        <button
          type="button"
          onClick={() => agregarAlCarrito(producto.id)}
          disabled={producto.stock <= 0}
          className="mt-6 w-full rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {producto.stock > 0
            ? '🛒 Agregar al carrito'
            : 'Producto agotado'}
        </button>

        {/* Cantidad registrada en el carrito */}
        <output className="mt-4 block text-center font-semibold text-[#17324D]">
          En el carrito: {cantidadEnCarrito}{' '}
          {cantidadEnCarrito === 1 ? 'unidad' : 'unidades'}
        </output>

        <Link
          to="/carrito"
          className="mt-4 block text-center font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-600"
        >
          Ver carrito de compras
        </Link>

        {/* Regresar al inventario */}
        <Link
          to="/inventario"
          className="mt-6 inline-block rounded-lg bg-[#17324D] px-5 py-3 font-semibold text-white hover:bg-[#246B9B]"
        >
          ← Volver al inventario
        </Link>

      </div>
    </section>
  )
}

export default DetalleProducto