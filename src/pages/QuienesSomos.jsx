import shiroNosotros from '../assets/images/shiro-nosotros.png'

function QuienesSomos() {
  return (
    <section className="pagina-informativa quienes-somos">
      <h2>¿Quiénes somos?</h2>

      <img
        src={shiroNosotros}
        alt="Shiro, mascota de nuestro supermercado, rodeado de huellitas azules"
        className="quienes-somos__imagen"
        width="850"
        height="850"
      />

      <p>
        En Supermercado Shiro creemos que realizar las compras
        del hogar debe ser una experiencia sencilla, cómoda
        y accesible para todas las familias.
      </p>

      <p>
        Nuestro propósito es ofrecer una amplia variedad de
        productos de alimentación, bebidas, limpieza e higiene,
        facilitando el acceso a los artículos necesarios
        para la vida cotidiana.
      </p>

      <p>
        Buscamos entregar una experiencia de compra organizada,
        cercana y confiable, donde nuestros clientes puedan
        encontrar todo lo que necesitan en un solo lugar.
      </p>
    </section>
  )
}

export default QuienesSomos