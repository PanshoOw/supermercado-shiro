import { useState } from 'react'
import { Link } from 'react-router'
import { useInventario } from '../hooks/useInventario.js'

// Valores iniciales del formulario
const camposIniciales = {
  nombre: '',
  marca: '',
  tipo: '',
  precio: '',
  stock: ''
}

function AgregarProducto() {
  const { agregarProducto } = useInventario()

  const [formulario, setFormulario] = useState(camposIniciales)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  // Actualizar los campos del formulario
  function manejarCambio(event) {
    const { name, value } = event.target

    setFormulario((formularioAnterior) => ({
      ...formularioAnterior,
      [name]: value
    }))
  }

  // Registrar un nuevo producto
  function manejarEnvio(event) {
    event.preventDefault()

    const nombre = formulario.nombre.trim()
    const marca = formulario.marca.trim()
    const precio = Number(formulario.precio)
    const stock = Number(formulario.stock)

    if (
      !nombre ||
      !marca ||
      !formulario.tipo ||
      !Number.isInteger(precio) ||
      precio <= 0 ||
      formulario.stock === '' ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      setError('Verifica los datos ingresados antes de continuar.')
      setMensaje('')
      return
    }

    agregarProducto({
      nombre,
      marca,
      tipo: formulario.tipo,
      precio,
      stock
    })

    setFormulario({ ...camposIniciales })
    setError('')
    setMensaje(`El producto "${nombre}" se agregó correctamente.`)
  }

  return (
    <section className="pagina-informativa">
      <h2>Agregar producto</h2>

      <p>
        Completa el siguiente formulario para registrar
        un nuevo artículo en el inventario.
      </p>

      <form className="formulario-producto" onSubmit={manejarEnvio}>

        <div className="formulario-producto__campo">
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            maxLength={100}
            required
          />
        </div>

        <div className="formulario-producto__campo">
          <label htmlFor="marca">Marca</label>
          <input
            type="text"
            id="marca"
            name="marca"
            value={formulario.marca}
            onChange={manejarCambio}
            maxLength={60}
            required
          />
        </div>

        <div className="formulario-producto__campo">
          <label htmlFor="tipo">Tipo de producto</label>
          <select
            id="tipo"
            name="tipo"
            value={formulario.tipo}
            onChange={manejarCambio}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Higiene">Higiene</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="formulario-producto__campo">
          <label htmlFor="precio">Precio (CLP)</label>
          <input
            type="number"
            id="precio"
            name="precio"
            min="1"
            step="1"
            value={formulario.precio}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="formulario-producto__campo">
          <label htmlFor="stock">Cantidad disponible</label>
          <input
            type="number"
            id="stock"
            name="stock"
            min="0"
            step="1"
            value={formulario.stock}
            onChange={manejarCambio}
            required
          />
        </div>

        <button type="submit">
          Agregar producto
        </button>

      </form>

      {error && (
        <p role="alert" className="formulario-producto__error">
          {error}
        </p>
      )}

      {mensaje && (
        <div className="formulario-producto__resultado">
            <output>{mensaje}</output>
            <p>
            <Link to="/inventario">Ver inventario</Link>
            </p>
        </div>
      )}
    </section>
  )
}

export default AgregarProducto