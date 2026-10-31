import shiroPreguntas from '../assets/images/shiro-preguntas.png'

function PreguntasFrecuentes() {
  return (
    <section className="pagina-informativa">
      <h2>Preguntas frecuentes</h2>

      <p>
        Encuentra respuestas a las consultas más habituales
        sobre nuestro supermercado y sus productos.
      </p>

      <img
        src={shiroPreguntas}
        alt="Shiro, mascota del supermercado, con expresión curiosa"
        className="preguntas-frecuentes__imagen"
        width="900"
        height="900"
        loading="lazy"
      />

      <details>
        <summary>¿Qué productos ofrece Supermercado Shiro?</summary>
        <p>
          Disponemos de productos de alimentación, bebidas,
          artículos de limpieza, higiene personal y otros
          productos necesarios para el hogar.
        </p>
      </details>

      <details>
        <summary>¿Cómo puedo consultar los productos disponibles?</summary>
        <p>
          Puedes consultar todos los artículos disponibles
          desde la sección Inventario de nuestro menú
          de navegación.
        </p>
      </details>

      <details>
        <summary>¿Los precios están expresados en pesos chilenos?</summary>
        <p>
          Sí. Todos los precios de nuestro inventario
          están expresados en pesos chilenos (CLP).
        </p>
      </details>

      <details>
        <summary>¿Puedo comprar directamente desde la página?</summary>
        <p>
          Actualmente, nuestra plataforma permite consultar
          los productos disponibles y gestionar el inventario.
          Las compras en línea no están habilitadas.
        </p>
      </details>
    </section>
  )
}

export default PreguntasFrecuentes