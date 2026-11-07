import { Link } from 'react-router'
import { useInventario } from '../hooks/useInventario.js'
import Indicador from '../components/Indicador.jsx'
import shiroBienvenida from '../assets/images/shiro-bienvenida.png'

function Inicio() {
  const { productos } = useInventario()

  // Calcular la cantidad total de unidades disponibles
  const totalUnidades = productos.reduce(
    (total, producto) => total + producto.stock,
    0
  )

  // Contar los tipos de productos diferentes
  const totalCategorias = new Set(
    productos.map((producto) => producto.tipo)
  ).size

  return (
    <>
      {/* Sección de bienvenida */}
      <section className="bienvenida">
        <div className="bienvenida__texto">
          <h2>¡Bienvenido a Supermercado Shiro!</h2>

          <p>
            En Supermercado Shiro queremos que encuentres
            todo lo que necesitas para tu hogar, con una
            amplia variedad de productos y precios accesibles.
          </p>

          <p>
            Explora nuestra selección de alimentos, bebidas,
            productos de limpieza, artículos de higiene y
            mucho más. ¡Shiro te da la bienvenida!
          </p>
        </div>

        <img
          src={shiroBienvenida}
          alt="Shiro, mascota del supermercado, saludando con una patita"
          className="bienvenida__imagen"
          width="1374"
          height="1145"
        />
      </section>

      {/* Panel de gestión */}
      <section aria-labelledby="titulo-panel">
        <h2 id="titulo-panel">Panel de gestión</h2>

        <p className="mb-6">
          Consulta el estado actual del inventario y accede
          rápidamente a las principales funcionalidades.
        </p>

        {/* Indicadores del inventario */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Indicador
            titulo="Productos registrados"
            valor={productos.length}
          />

          <Indicador
            titulo="Categorías disponibles"
            valor={totalCategorias}
          />

          <Indicador
            titulo="Unidades en stock"
            valor={totalUnidades}
          />
        </div>

        {/* Accesos rápidos */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

          <Link
            to="/inventario"
            className="flex flex-col gap-2 rounded-xl bg-[#17324D] p-6 text-white transition-colors hover:bg-[#246B9B]"
          >
            <span className="text-lg font-bold">
              📦 Consultar inventario
            </span>

            <span className="text-sm text-sky-100">
              Revisa todos los artículos registrados
              y sus cantidades disponibles.
            </span>
          </Link>

          <Link
            to="/agregar-producto"
            className="flex flex-col gap-2 rounded-xl border border-sky-200 bg-sky-100 p-6 text-[#17324D] transition-colors hover:bg-sky-200"
          >
            <span className="text-lg font-bold">
              ➕ Agregar producto
            </span>

            <span className="text-sm">
              Registra nuevos artículos y mantén
              actualizado el inventario.
            </span>
          </Link>

        </div>
      </section>
    </>
  )
}

export default Inicio