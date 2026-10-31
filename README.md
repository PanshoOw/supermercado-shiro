# 🛒 Supermercado Shiro

### Sistema de gestión de inventario desarrollado con React

**Todo lo que necesitas, en un solo lugar.** 🐶💙

---

## 📖 Descripción del proyecto

**Supermercado Shiro** es una aplicación web desarrollada con React que simula un sistema de gestión de inventario para un supermercado.

La plataforma permite consultar los productos disponibles, registrar nuevos artículos mediante un formulario y visualizar información actualizada del inventario.

La aplicación utiliza **React Router** para gestionar la navegación entre páginas y **React Context junto con useState** para compartir el inventario entre distintos componentes.

La interfaz incorpora **Tailwind CSS**, estilos personalizados y una identidad visual inspirada en Shiro, la mascota del supermercado.

Este proyecto fue desarrollado como parte de la asignatura **Desarrollo Frontend II (PFY2202)** de Duoc UC.

---

## 🎯 Objetivos

### Objetivo general

Desarrollar una aplicación web de gestión de inventario utilizando tecnologías de React, implementando navegación, gestión global de estados y un framework CSS.

### Objetivos específicos

* Implementar una aplicación de página única (SPA).
* Configurar la navegación mediante React Router.
* Compartir información mediante React Context.
* Administrar el inventario utilizando useState.
* Desarrollar un formulario para registrar productos.
* Mostrar los artículos registrados en una tabla dinámica.
* Validar los datos ingresados por el usuario.
* Implementar Tailwind CSS para mejorar la interfaz.
* Aplicar principios básicos de accesibilidad y diseño responsive.

---

## 🚀 Funcionalidades

### 🏠 Inicio

La página principal incluye una presentación del supermercado, ilustraciones de Shiro y un panel de gestión con información del inventario.

El panel muestra tres indicadores:

* Cantidad de productos registrados.
* Número de categorías disponibles.
* Total de unidades en stock.

También incorpora accesos directos a las páginas de inventario y registro de productos.

Los indicadores se actualizan automáticamente cuando cambia el estado global.

### 📦 Inventario

Permite consultar todos los productos registrados mediante una tabla dinámica.

Cada artículo contiene los siguientes datos:

| Campo  | Descripción                        |
| ------ | ---------------------------------- |
| Nombre | Identificación del producto.       |
| Marca  | Marca comercial.                   |
| Tipo   | Categoría del artículo.            |
| Precio | Valor expresado en pesos chilenos. |
| Stock  | Cantidad de unidades disponibles.  |

La página también muestra la cantidad total de productos registrados y un mensaje informativo cuando el inventario está vacío.

### ➕ Agregar producto

Permite registrar artículos mediante un formulario.

El formulario incorpora validaciones para impedir el ingreso de datos incompletos, precios no válidos y cantidades negativas.

Cuando un producto se registra correctamente, se incorpora al estado global y aparece automáticamente en el inventario.

La aplicación muestra un mensaje de confirmación y proporciona un enlace para consultar los productos registrados.

### 🐾 ¿Quiénes somos?

Presenta información general sobre Supermercado Shiro, su propósito y su propuesta de servicio.

Incluye una ilustración personalizada de Shiro.

### ❓ Preguntas frecuentes

Contiene respuestas a consultas habituales sobre los productos, precios y funcionamiento de la plataforma.

Se utilizan elementos HTML semánticos `details` y `summary` para mostrar respuestas desplegables.

### 🔎 Página no encontrada

La aplicación incorpora una ruta comodín que muestra una página informativa cuando se intenta acceder a una dirección inexistente.

También proporciona un enlace para regresar al inicio.

---

## 🛠️ Tecnologías utilizadas

| Tecnología            | Utilización                                  |
| --------------------- | -------------------------------------------- |
| HTML5                 | Estructura semántica del contenido.          |
| CSS3                  | Estilos personalizados y diseño responsive.  |
| Tailwind CSS          | Utilidades de diseño y componentes visuales. |
| JavaScript            | Lógica y manipulación de datos.              |
| React                 | Desarrollo de componentes e interfaces.      |
| React Router          | Navegación entre páginas.                    |
| React Context         | Distribución del estado global.              |
| useState              | Administración del inventario y formulario.  |
| useContext            | Acceso al estado compartido.                 |
| useMemo y useCallback | Optimización de referencias del contexto.    |
| Vite                  | Servidor de desarrollo y compilación.        |
| ESLint                | Análisis estático del código.                |
| Git y GitHub          | Control de versiones y publicación.          |

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
│   │   └── MenuNavegacion.jsx
│   │
│   ├── context/
│   │   ├── InventarioContext.js
│   │   └── InventarioProvider.jsx
│   │
│   ├── data/
│   │   └── productos.js
│   │
│   ├── hooks/
│   │   └── useInventario.js
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Inventario.jsx
│   │   ├── AgregarProducto.jsx
│   │   ├── QuienesSomos.jsx
│   │   ├── PreguntasFrecuentes.jsx
│   │   └── PaginaNoEncontrada.jsx
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

---

## ⚙️ Instalación y ejecución

### Requisitos

Disponer de Node.js y npm en versiones compatibles con el proyecto.

### 1. Instalar dependencias

Desde la carpeta del proyecto:

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local donde se ejecuta la aplicación.

Generalmente:

```text
http://localhost:5173/
```

### 3. Comprobar el código mediante ESLint

```bash
npm run lint
```

### 4. Generar la compilación de producción

```bash
npm run build
```

### 5. Visualizar la compilación

```bash
npm run preview
```

---

## 🧩 Arquitectura y gestión del estado

La aplicación utiliza componentes funcionales de React organizados según sus responsabilidades.

**InventarioProvider.jsx** administra la lista de productos mediante `useState` y proporciona la función `agregarProducto()`.

**InventarioContext.js** define el contexto utilizado para compartir la información.

**useInventario.js** es un hook personalizado que facilita el acceso al contexto desde los componentes.

**AgregarProducto.jsx** administra los datos del formulario mediante estado local y registra los nuevos artículos en el contexto global.

**Inventario.jsx** consulta el estado global y representa los productos mediante una tabla dinámica.

**Inicio.jsx** utiliza el mismo estado para calcular los indicadores del panel de gestión.

De esta forma, las páginas pueden consultar y actualizar información compartida sin mantener copias independientes del inventario.

---

## 🎨 Identidad visual

Supermercado Shiro utiliza una identidad visual basada en azul marino, celeste y blanco.

| Color               | Código    |
| ------------------- | --------- |
| Azul marino         | `#17324D` |
| Azul intermedio     | `#246B9B` |
| Celeste             | `#59B9E8` |
| Fondo celeste claro | `#EEF8FF` |
| Blanco              | `#FFFFFF` |

La identidad visual incorpora un logotipo personalizado y distintas ilustraciones de Shiro.

---

## ♿ Accesibilidad

Durante el desarrollo se incorporaron prácticas orientadas a mejorar la accesibilidad:

* Estructura HTML semántica.
* Etiquetas asociadas a los campos del formulario.
* Textos alternativos para las imágenes.
* Gestión del foco al cambiar de ruta.
* Títulos dinámicos para las distintas páginas.
* Mensajes de confirmación y error.
* Navegación mediante teclado.
* Diseño adaptable a diferentes tamaños de pantalla.
* Consideración de preferencias de movimiento reducido.

---

## 📌 Consideraciones técnicas

El inventario utiliza inicialmente seis productos de demostración.

Los artículos registrados mediante el formulario se almacenan temporalmente en el estado de React.

**Actualmente, los productos agregados no persisten después de recargar completamente la aplicación.** Al recargar, se restablece el inventario inicial.

La plataforma no incorpora una base de datos, autenticación ni procesamiento de pagos.

Los productos y precios corresponden a información de demostración utilizada con fines académicos.

---

## 📚 Información académica

**Institución:** Duoc UC
**Asignatura:** Desarrollo Frontend II
**Código:** PFY2202
**Experiencia de aprendizaje:** 1
**Semana:** 2
**Actividad:** Implementando gestión de estado en componentes frontend con React
**Modalidad:** Individual

---

## 🐶 Supermercado Shiro

**Todo lo que necesitas, en un solo lugar.** 💙
