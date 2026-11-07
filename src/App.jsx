import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router'

import Inicio from './pages/Inicio.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import Inventario from './pages/Inventario.jsx'
import PaginaNoEncontrada from './pages/PaginaNoEncontrada.jsx'
import AgregarProducto from './pages/AgregarProducto.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import Carrito from './pages/Carrito.jsx'

import MenuNavegacion from './components/MenuNavegacion.jsx'
import logoSupermercado from './assets/images/logo-supermercado-shiro.png'

import './App.css'

// Títulos de las páginas
const titulosPaginas = {
  '/': 'Inicio | Supermercado Shiro',
  '/quienes-somos': 'Quiénes somos | Supermercado Shiro',
  '/preguntas-frecuentes': 'Preguntas frecuentes | Supermercado Shiro',
  '/inventario': 'Inventario | Supermercado Shiro',
  '/agregar-producto': 'Agregar producto | Supermercado Shiro',
  '/carrito': 'Carrito de compras | Supermercado Shiro',
}

function App() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    const esRutaDetalle = /^\/productos\/[^/]+$/.test(location.pathname)

    document.title = titulosPaginas[location.pathname]
      ?? (esRutaDetalle
        ? 'Detalle del producto | Supermercado Shiro'
        : 'Página no encontrada | Supermercado Shiro')

    mainRef.current?.focus()
  }, [location.pathname])

  return (
    <div className="app">

      {/* Encabezado principal */}
      <header>
        <h1 className="marca-titulo">
          <img
            src={logoSupermercado}
            alt="Supermercado Shiro"
            className="marca-logo"
          />
        </h1>

        <p>Todo lo que necesitas, en un solo lugar.</p>
      </header>

      {/* Contenido principal */}
      <main ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </main>

      {/* Menú inferior */}
      <footer>
        <MenuNavegacion />
      </footer>

    </div>
  )
}

export default App