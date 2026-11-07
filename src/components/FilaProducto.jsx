import { Link } from 'react-router'
import { formatearPrecio } from '../utils/formatearPrecio.js'

function FilaProducto({ producto }) {
  return (
    <tr>
      <td>
        <Link
          to={`/productos/${producto.id}`}
          className="font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-600"
        >
          {producto.nombre}
        </Link>
      </td>

      <td>{producto.marca}</td>
      <td>{producto.tipo}</td>
      <td>{formatearPrecio(producto.precio)}</td>
      <td>{producto.stock}</td>
    </tr>
  )
}

export default FilaProducto