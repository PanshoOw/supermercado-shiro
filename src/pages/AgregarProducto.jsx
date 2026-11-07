import { useState } from 'react'
import { Link } from 'react-router'
import { useInventario } from '../hooks/useInventario.js'
import { validarProducto } from '../utils/validarProducto.js'
import CampoFormulario from '../components/CampoFormulario.jsx'
import { CATEGORIAS } from '../data/categorias.js'

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

  /// Registrar un nuevo producto
  function manejarEnvio(event) {
    event.preventDefault()

    const resultado = validarProducto(formulario)

    if (resultado.error) {
      setError(resultado.error)
      setMensaje('')
      return
    }

    agregarProducto(resultado.producto)

    setFormulario({ ...camposIniciales })
    setError('')
    setMensaje(
      `El producto "${resultado.producto.nombre}" se agregó correctamente.`
    )
  }

  return (
    <section className="pagina-informativa">
      <h2>Agregar producto</h2>

      <p>
        Completa el siguiente formulario para registrar
        un nuevo artículo en el inventario.
      </p>

      <form className="formulario-producto" onSubmit={manejarEnvio}>

        <CampoFormulario
          nombre="nombre"
          etiqueta="Nombre del producto"
          valor={formulario.nombre}
          onChange={manejarCambio}
          maxLength={100}
        />

        <CampoFormulario
          nombre="marca"
          etiqueta="Marca"
          valor={formulario.marca}
          onChange={manejarCambio}
          maxLength={60}
        />

        <CampoFormulario
          nombre="tipo"
          etiqueta="Tipo de producto"
          tipo="select"
          valor={formulario.tipo}
          onChange={manejarCambio}
          opciones={CATEGORIAS}
        />

        <CampoFormulario
          nombre="precio"
          etiqueta="Precio (CLP)"
          tipo="number"
          valor={formulario.precio}
          onChange={manejarCambio}
          min="1"
          step="1"
        />

        <CampoFormulario
          nombre="stock"
          etiqueta="Cantidad disponible"
          tipo="number"
          valor={formulario.stock}
          onChange={manejarCambio}
          min="0"
          step="1"
        />

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