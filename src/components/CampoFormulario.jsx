function CampoFormulario({
  nombre,
  etiqueta,
  valor,
  onChange,
  tipo = 'text',
  opciones = [],
  maxLength,
  min,
  step
}) {
  return (
    <div className="formulario-producto__campo">
      <label htmlFor={nombre}>{etiqueta}</label>

      {tipo === 'select' ? (
        <select
          id={nombre}
          name={nombre}
          value={valor}
          onChange={onChange}
          required
        >
          <option value="">Selecciona una categoría</option>

          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={tipo}
          id={nombre}
          name={nombre}
          value={valor}
          onChange={onChange}
          maxLength={maxLength}
          min={min}
          step={step}
          required
        />
      )}
    </div>
  )
}

export default CampoFormulario