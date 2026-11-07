# 🛒 Supermercado Shiro

### Sistema de gestión de inventario y carrito de compras desarrollado con React

**Todo lo que necesitas, en un solo lugar.** 🐶💙

---

## 📖 Descripción del proyecto

**Supermercado Shiro** es una aplicación web desarrollada con React que simula un sistema de gestión de inventario y carrito de compras para un supermercado.

La plataforma permite consultar productos, filtrar artículos por categoría, visualizar información individual, registrar nuevos productos y administrar un carrito de compras con actualización automática de las existencias disponibles.

La aplicación utiliza **React Router** para gestionar la navegación, **React Context y useReducer** para administrar el estado global, y **Tailwind CSS** junto con estilos personalizados para construir una interfaz responsive.

El proyecto incorpora una identidad visual inspirada en Shiro, la mascota del supermercado.

Fue desarrollado como parte de la asignatura **Desarrollo Frontend II (PFY2202)** de Duoc UC.

---

## 🎯 Objetivos

### Objetivo general

Desarrollar una aplicación web de supermercado utilizando React, implementando navegación dinámica, componentes reutilizables, gestión global del estado y funcionalidades de inventario y carrito de compras.

### Objetivos específicos

- Implementar una aplicación de página única (SPA).
- Configurar la navegación mediante React Router.
- Crear rutas dinámicas para consultar productos individuales.
- Administrar el estado global mediante React Context y useReducer.
- Registrar productos utilizando formularios controlados.
- Validar los datos ingresados mediante funciones reutilizables.
- Filtrar productos por categoría sin modificar el inventario original.
- Implementar un carrito de compras con controles de cantidad.
- Sincronizar automáticamente las existencias entre inventario y carrito.
- Aplicar principios de modularidad y reutilización de componentes.
- Incorporar Tailwind CSS y estilos personalizados.
- Implementar buenas prácticas básicas de accesibilidad y diseño responsive.

---

## 🚀 Funcionalidades

### 🏠 Inicio

La página principal presenta información general del supermercado e incorpora ilustraciones personalizadas de Shiro.

Incluye un panel de gestión que muestra:

- Cantidad de productos registrados.
- Número de categorías presentes en el inventario.
- Total de unidades disponibles en stock.

Los indicadores se calculan a partir del inventario global y se actualizan automáticamente cuando cambian las existencias o se registran nuevos productos.

También proporciona accesos directos al inventario y al formulario de registro.

### 📦 Inventario

Permite consultar los productos registrados mediante una tabla dinámica.

Cada artículo contiene la siguiente información:

| Campo | Descripción |
|---|---|
| Nombre | Identificación del producto. |
| Marca | Marca comercial. |
| Tipo | Categoría del artículo. |
| Precio | Valor expresado en pesos chilenos (CLP). |
| Stock | Cantidad de unidades disponibles. |

La página incorpora un filtro por categoría que permite visualizar únicamente los productos correspondientes a la selección realizada.

El filtrado no elimina ni modifica los artículos originales.

Además, los nombres de los productos funcionan como enlaces hacia sus respectivas páginas de detalle.

### 🔎 Detalle del producto

Permite consultar información individual de un artículo mediante una ruta dinámica.

Por ejemplo:

`/productos/1`

La página muestra:

- Nombre del producto.
- Marca.
- Categoría.
- Precio unitario.
- Stock disponible.
- Estado de disponibilidad.
- Cantidad de unidades agregadas al carrito.

También incluye un botón para agregar una unidad al carrito.

Cuando el stock llega a cero, el botón se deshabilita para impedir nuevas incorporaciones.

Si el identificador solicitado no corresponde a un artículo existente, se muestra un mensaje informativo y un enlace para regresar al inventario.

### 🛒 Carrito de compras

Permite consultar y administrar los artículos seleccionados.

Cada producto del carrito muestra:

- Nombre y marca.
- Categoría.
- Precio unitario.
- Cantidad seleccionada.
- Stock disponible.
- Subtotal.

Los controles **+** y **−** permiten aumentar o disminuir la cantidad de cada producto.

Estas operaciones actualizan automáticamente las existencias del inventario:

- Al agregar o aumentar una unidad, el stock disponible disminuye.
- Al disminuir una unidad, el stock disponible aumenta.
- Cuando la cantidad seleccionada llega a cero, el artículo se elimina del carrito.
- Cuando el stock disponible llega a cero, se impide aumentar la cantidad.

La página también calcula la cantidad total de unidades seleccionadas y el importe total del carrito.

Si no existen artículos seleccionados, muestra un mensaje informativo y un enlace para explorar el inventario.

### ➕ Agregar producto

Permite registrar nuevos artículos mediante un formulario controlado.

Los campos disponibles son:

- Nombre.
- Marca.
- Categoría.
- Precio.
- Stock.

La validación se encuentra centralizada en `validarProducto.js` e incorpora comprobaciones de formato, longitud, categoría y valores numéricos.

Los productos registrados reciben identificadores únicos mediante `crypto.randomUUID()`.

Cuando el registro finaliza correctamente, el artículo se incorpora al inventario global y puede consultarse en su página de detalle.

### 🐾 ¿Quiénes somos?

Presenta información general sobre Supermercado Shiro, su propósito y su propuesta de servicio.

Incluye una ilustración personalizada de Shiro.

### ❓ Preguntas frecuentes

Contiene respuestas a consultas habituales relacionadas con los productos y el funcionamiento de la plataforma.

Utiliza elementos HTML semánticos `details` y `summary` para presentar respuestas desplegables.

### 🔎 Página no encontrada

La aplicación incorpora una ruta comodín para gestionar direcciones inexistentes.

Muestra un mensaje informativo y un enlace para regresar al inicio.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Utilización |
|---|---|
| HTML5 | Estructura semántica del contenido. |
| CSS3 | Estilos personalizados y diseño responsive. |
| Tailwind CSS 4 | Utilidades de diseño y presentación visual. |
| JavaScript | Lógica de negocio y manipulación de datos. |
| React 19 | Desarrollo de componentes e interfaces. |
| React Router 7 | Navegación y rutas dinámicas. |
| React Context | Distribución del estado global. |
| useReducer | Administración del inventario y carrito de compras. |
| useState | Administración de formularios y filtros locales. |
| useContext | Acceso al estado compartido. |
| useMemo y useCallback | Estabilización de valores y funciones del contexto. |
| Vite 8 | Servidor de desarrollo y compilación. |
| ESLint | Análisis estático del código. |
| Git y GitHub | Control de versiones y alojamiento del repositorio. |

---

## 📂 Estructura del proyecto

```text
supermercado-shiro/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo-supermercado-shiro.png
│   │       ├── shiro-bienvenida.png
│   │       ├── shiro-nosotros.png
│   │       └── shiro-preguntas.png
│   │
│   ├── components/
│   │   ├── ArticuloCarrito.jsx
│   │   ├── CampoFormulario.jsx
│   │   ├── FilaProducto.jsx
│   │   ├── Indicador.jsx
│   │   └── MenuNavegacion.jsx
│   │
│   ├── context/
│   │   ├── InventarioContext.js
│   │   └── InventarioProvider.jsx
│   │
│   ├── data/
│   │   ├── categorias.js
│   │   └── productos.js
│   │
│   ├── hooks/
│   │   └── useInventario.js
│   │
│   ├── pages/
│   │   ├── AgregarProducto.jsx
│   │   ├── Carrito.jsx
│   │   ├── DetalleProducto.jsx
│   │   ├── Inicio.jsx
│   │   ├── Inventario.jsx
│   │   ├── PaginaNoEncontrada.jsx
│   │   ├── PreguntasFrecuentes.jsx
│   │   └── QuienesSomos.jsx
│   │
│   ├── reducers/
│   │   └── inventarioReducer.js
│   │
│   ├── utils/
│   │   ├── formatearPrecio.js
│   │   └── validarProducto.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

La estructura podrá ampliarse con archivos de configuración adicionales para el despliegue.

---

## ⚙️ Instalación y ejecución

### Requisitos

Disponer de Node.js y npm en versiones compatibles con las dependencias del proyecto.

### 1. Obtener el proyecto

Clonar el repositorio:

```bash
git clone https://github.com/PanshoOw/supermercado-shiro.git
```

Ingresar al directorio:

```bash
cd supermercado-shiro
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local donde se encuentra disponible la aplicación.

### 4. Ejecutar ESLint

```bash
npm run lint
```

### 5. Generar la compilación de producción

```bash
npm run build
```

### 6. Previsualizar la compilación

```bash
npm run preview
```

---

## 🧩 Arquitectura y gestión del estado

La aplicación utiliza componentes funcionales de React organizados según sus responsabilidades.

### Estado global

El estado global se administra mediante `InventarioProvider.jsx`, que utiliza `useReducer` junto con `inventarioReducer.js`.

El estado contiene dos colecciones:

```javascript
{
  productos: [...],
  carrito: []
}
```

El inventario almacena la información y las existencias disponibles de los artículos.

El carrito almacena los identificadores de los productos seleccionados y sus respectivas cantidades.

### Operaciones del reducer

El reducer contempla las siguientes acciones:

| Acción | Responsabilidad |
|---|---|
| `AGREGAR_PRODUCTO` | Registrar un artículo en el inventario. |
| `AGREGAR_AL_CARRITO` | Incorporar una unidad al carrito y descontar stock. |
| `AUMENTAR_CANTIDAD` | Incrementar una unidad del carrito y descontar stock. |
| `DISMINUIR_CANTIDAD` | Reducir una unidad del carrito y recuperar stock. |

Las operaciones construyen nuevos valores del estado sin modificar directamente sus arreglos.

La comprobación de existencias impide agregar productos inexistentes o sin stock disponible.

### Contexto y hook personalizado

`InventarioContext.js` define el contexto global.

`InventarioProvider.jsx` comparte el estado y las funciones necesarias para modificarlo.

`useInventario.js` proporciona una interfaz reutilizable para acceder a los datos desde los componentes.

### Estado local

Los componentes utilizan `useState` para administrar información que no necesita compartirse globalmente.

Por ejemplo:

- Campos del formulario de registro.
- Mensajes de validación y confirmación.
- Categoría seleccionada para filtrar el inventario.

### Componentes reutilizables

La aplicación incorpora componentes especializados:

- `FilaProducto.jsx`: representa un artículo dentro de la tabla de inventario.
- `CampoFormulario.jsx`: construye campos reutilizables del formulario.
- `Indicador.jsx`: presenta los indicadores del panel de gestión.
- `ArticuloCarrito.jsx`: muestra un artículo y sus controles de cantidad.
- `MenuNavegacion.jsx`: administra los enlaces principales.

Esta distribución permite separar la lógica de negocio de la presentación y facilita el mantenimiento del código.

### Funciones auxiliares

`validarProducto.js` centraliza las validaciones del formulario.

`formatearPrecio.js` permite presentar valores monetarios en pesos chilenos.

`categorias.js` mantiene una definición compartida de las categorías utilizadas por el formulario y el filtro.

---

## 🧭 Navegación

La aplicación utiliza React Router para gestionar las siguientes rutas:

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/inventario` | Inventario |
| `/agregar-producto` | Registro de productos |
| `/productos/:id` | Detalle de producto |
| `/carrito` | Carrito de compras |
| `/quienes-somos` | Información del supermercado |
| `/preguntas-frecuentes` | Preguntas frecuentes |
| `*` | Página no encontrada |

Las rutas dinámicas permiten consultar diferentes artículos utilizando un mismo componente.

La navegación se realiza sin recargar completamente el documento durante los cambios de página.

---

## 🎨 Identidad visual

Supermercado Shiro utiliza una identidad visual basada en azul marino, celeste y blanco.

| Color | Código |
|---|---|
| Azul marino | `#17324D` |
| Azul intermedio | `#246B9B` |
| Celeste | `#59B9E8` |
| Fondo celeste claro | `#EEF8FF` |
| Blanco | `#FFFFFF` |

La interfaz incorpora un logotipo personalizado e ilustraciones de Shiro.

El diseño combina estilos CSS propios con utilidades de Tailwind CSS.

---

## ♿ Accesibilidad y diseño responsive

Durante el desarrollo se incorporaron prácticas orientadas a mejorar la accesibilidad y la adaptación a diferentes dispositivos:

- Uso de HTML semántico.
- Etiquetas asociadas a los controles del formulario.
- Textos alternativos para las imágenes.
- Gestión del foco al cambiar de ruta.
- Títulos dinámicos de las páginas.
- Mensajes de confirmación y error.
- Nombres accesibles para los botones de cantidad del carrito.
- Deshabilitación de controles cuando no existe stock disponible.
- Navegación mediante enlaces y botones semánticos.
- Diseño adaptable a diferentes tamaños de pantalla.
- Desplazamiento horizontal de la tabla de inventario en dispositivos móviles.
- Consideración de preferencias de movimiento reducido.

---

## 🧪 Comprobaciones funcionales

La aplicación permite comprobar los siguientes escenarios:

1. Visualizar los productos iniciales del inventario.
2. Filtrar artículos por categoría sin alterar sus datos originales.
3. Consultar el detalle de un producto mediante su identificador.
4. Registrar artículos mediante el formulario.
5. Agregar productos al carrito y comprobar la disminución del stock.
6. Aumentar cantidades desde el carrito.
7. Disminuir cantidades y recuperar existencias.
8. Eliminar automáticamente del carrito un artículo cuya cantidad llega a cero.
9. Impedir que se agreguen unidades cuando el stock disponible es cero.
10. Visualizar subtotales y el importe total del carrito.
11. Comprobar los mensajes correspondientes a productos inexistentes y carritos vacíos.

La revisión estática y la compilación pueden ejecutarse mediante:

```bash
npm run lint
npm run build
```

---

## 📌 Consideraciones técnicas

La aplicación utiliza inicialmente seis productos de demostración.

Los productos registrados y las cantidades seleccionadas en el carrito se almacenan temporalmente en el estado de React.

**Los cambios no persisten después de recargar completamente la aplicación.**

Al recargar el navegador:

- Se restablece el inventario inicial.
- Se eliminan los productos registrados durante la sesión.
- El carrito vuelve a estar vacío.

La aplicación no incorpora una base de datos, autenticación, pasarela de pagos ni procesamiento de transacciones comerciales.

El carrito permite simular la selección y gestión de cantidades, pero no realiza compras reales.

Los productos y precios corresponden a información utilizada con fines académicos.

---

## 📚 Información académica

**Institución:** Duoc UC  
**Asignatura:** Desarrollo Frontend II  
**Código:** PFY2202  
**Experiencia de aprendizaje:** 1  
**Semana:** 3  
**Actividad:** Evaluación sumativa — Desarrollo de componentes frontend con React avanzado  
**Modalidad:** Individual

---

## 🐶 Supermercado Shiro

**Todo lo que necesitas, en un solo lugar.** 💙