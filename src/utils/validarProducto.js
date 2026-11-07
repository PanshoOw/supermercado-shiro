import { CATEGORIAS } from '../data/categorias.js'

// Patrones de validación
const patrones = {
  nombre: /^[\p{L}\p{N}][\p{L}\p{N} .,()/%+'°-]*$/u,
  marca: /^[\p{L}\p{N}][\p{L}\p{N} .&'/-]*$/u,
  precio: /^\d+$/,
  stock: /^\d+$/
}

// Categorías permitidas
const categorias = new Set(CATEGORIAS)

// Validar los datos de un producto
export function validarProducto(formulario) {
  const nombre = formulario.nombre.trim()
  const marca = formulario.marca.trim()
  const tipo = formulario.tipo
  const precioTexto = formulario.precio.trim()
  const stockTexto = formulario.stock.trim()

  // Validar nombre
  if (!patrones.nombre.test(nombre) || nombre.length > 100) {
    return {
      error: 'Ingresa un nombre válido de hasta 100 caracteres.'
    }
  }

  // Validar marca
  if (!patrones.marca.test(marca) || marca.length > 60) {
    return {
      error: 'Ingresa una marca válida de hasta 60 caracteres.'
    }
  }

  // Validar categoría
  if (!categorias.has(tipo)) {
    return {
      error: 'Selecciona una categoría válida.'
    }
  }

  // Validar precio
  const precio = Number(precioTexto)

  if (
    !patrones.precio.test(precioTexto) ||
    !Number.isSafeInteger(precio) ||
    precio <= 0
  ) {
    return {
      error: 'El precio debe ser un número entero mayor que cero.'
    }
  }

  // Validar stock
  const stock = Number(stockTexto)

  if (
    !patrones.stock.test(stockTexto) ||
    !Number.isSafeInteger(stock) ||
    stock < 0
  ) {
    return {
      error: 'El stock debe ser un número entero igual o mayor que cero.'
    }
  }

  // Devolver el producto validado
  return {
    producto: {
      nombre,
      marca,
      tipo,
      precio,
      stock
    }
  }
}