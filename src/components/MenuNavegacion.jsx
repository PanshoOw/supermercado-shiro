import { NavLink } from 'react-router'

function MenuNavegacion() {
  return (
    <nav className="menu-inferior" aria-label="Navegación principal">

      <NavLink to="/" end>
        🏠 Inicio
      </NavLink>

      <NavLink to="/inventario">
        📦 Inventario
      </NavLink>

      <NavLink to="/agregar-producto">
        ➕ Agregar producto
      </NavLink>

      <NavLink to="/carrito">
        🛒 Carrito
      </NavLink>

      <NavLink to="/quienes-somos">
        🐾 Quiénes somos
      </NavLink>

      <NavLink to="/preguntas-frecuentes">
        ❓ Preguntas frecuentes
      </NavLink>

    </nav>
  )
}

export default MenuNavegacion