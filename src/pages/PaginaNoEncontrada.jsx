import { Link } from 'react-router'

function PaginaNoEncontrada() {
  return (
    <section className="pagina-informativa pagina-no-encontrada">
      <h2>¡Ups! Página no encontrada</h2>

      <span className="pagina-no-encontrada__codigo">
        404
      </span>

      <p>
        Parece que la página que buscas no existe.
        ¡Pero no te preocupes! Shiro te ayudará
        a encontrar el camino de regreso.
      </p>

      <Link to="/" className="pagina-no-encontrada__enlace">
        Volver al inicio
      </Link>
    </section>
  )
}

export default PaginaNoEncontrada