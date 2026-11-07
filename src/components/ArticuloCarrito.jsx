import { formatearPrecio } from '../utils/formatearPrecio.js'

function ArticuloCarrito({ articulo, onAumentar, onDisminuir }) {
  const subtotal = articulo.precio * articulo.cantidad

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-sky-200 bg-sky-50 p-5 text-left shadow-sm sm:flex-row sm:items-center sm:justify-between">

      {/* Información del producto */}
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold text-[#17324D]">
          {articulo.nombre}
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          {articulo.marca} | {articulo.tipo}
        </p>

        <p className="mt-2 text-sm text-slate-700">
          Precio unitario: {formatearPrecio(articulo.precio)}
        </p>

        <p className="mt-1 text-sm text-slate-700">
          Stock disponible: {articulo.stock}
        </p>
      </div>

      {/* Controles de cantidad */}
      <div className="flex flex-col gap-3 sm:items-end">

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={onDisminuir}
            aria-label={`Disminuir cantidad de ${articulo.nombre}`}
            className="rounded-lg bg-sky-700 px-4 py-2 font-bold text-white hover:bg-sky-800"
          >
            −
          </button>

          <span className="min-w-8 text-center text-lg font-bold text-[#17324D]">
            {articulo.cantidad}
          </span>

          <button
            type="button"
            onClick={onAumentar}
            disabled={articulo.stock <= 0}
            aria-label={`Aumentar cantidad de ${articulo.nombre}`}
            className="rounded-lg bg-sky-700 px-4 py-2 font-bold text-white hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            +
          </button>

        </div>

        <p className="font-bold text-[#17324D]">
          Subtotal: {formatearPrecio(subtotal)}
        </p>

      </div>
    </article>
  )
}

export default ArticuloCarrito