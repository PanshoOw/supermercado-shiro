function Indicador({ titulo, valor }) {
  return (
    <div className="rounded-xl border border-sky-200 bg-sky-50 p-5 text-center">
      <span className="block text-sm font-semibold text-slate-700">
        {titulo}
      </span>

      <strong className="mt-2 block text-3xl text-sky-900">
        {valor}
      </strong>
    </div>
  )
}

export default Indicador