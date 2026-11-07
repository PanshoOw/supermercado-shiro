import { Link } from 'react-router'
import { useInventario } from '../hooks/useInventario.js'
import { formatearPrecio } from '../utils/formatearPrecio.js'
import ArticuloCarrito from '../components/ArticuloCarrito.jsx'

function Carrito() {
  const {
    productos,
    carrito,
    aumentarCantidad,
    disminuirCantidad
  } = useInventario()

  // Obtener la información de cada producto del carrito
  const articulosCarrito = carrito.flatMap((item) => {
    const producto = productos.find(
      (articulo) => articulo.id === item.productoId
    )

    return producto
      ? [{ ...producto, cantidad: item.cantidad }]
      : []
  })

  // Calcular la cantidad total de unidades seleccionadas
  const totalUnidades = articulosCarrito.reduce(
    (total, articulo) => total + articulo.cantidad,
    0
  )

  // Calcular el importe total del carrito
  const totalCompra = articulosCarrito.reduce(
    (total, articulo) => total + articulo.precio * articulo.cantidad,
    0
  )

  return (
    <section className="pagina-informativa">
      <h2>Carrito de compras</h2>

      <p>
        Revisa los productos seleccionados y modifica
        sus cantidades según tus necesidades.
      </p>

      {/* Carrito vacío */}
      {articulosCarrito.length === 0 ? (
        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-sky-200 bg-sky-50 p-6">

          <p className="text-lg font-semibold text-[#17324D]">
            Tu carrito de compras está vacío.
          </p>

          <Link
            to="/inventario"
            className="mt-6 inline-block rounded-lg bg-[#17324D] px-5 py-3 font-semibold text-white hover:bg-[#246B9B]"
          >
            Explorar productos
          </Link>

        </div>
      ) : (
        <>
          {/* Artículos del carrito */}
          <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-4">

            {articulosCarrito.map((articulo) => (
              <ArticuloCarrito
                key={articulo.id}
                articulo={articulo}
                onAumentar={() => aumentarCantidad(articulo.id)}
                onDisminuir={() => disminuirCantidad(articulo.id)}
              />
            ))}

          </div>

          {/* Resumen de la compra */}
          <div className="mx-auto mt-6 flex w-full max-w-3xl flex-col gap-3 rounded-xl border border-sky-200 bg-white p-6 text-left shadow-sm sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h3 className="text-lg font-bold text-[#17324D]">
                Resumen del carrito
              </h3>

              <p className="mt-2 text-slate-700">
                Unidades seleccionadas: {totalUnidades}
              </p>
            </div>

            <div className="text-xl font-bold text-sky-900">
              Total: {formatearPrecio(totalCompra)}
            </div>

          </div>

          {/* Regresar al inventario */}
          <Link
            to="/inventario"
            className="mt-6 inline-block rounded-lg bg-[#17324D] px-5 py-3 font-semibold text-white hover:bg-[#246B9B]"
          >
            ← Continuar explorando productos
          </Link>
        </>
      )}
    </section>
  )
}

export default Carrito