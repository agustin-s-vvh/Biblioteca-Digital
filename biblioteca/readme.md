# 📚 Biblioteca Horizonte

**Biblioteca Horizonte** es una página web diseñada como una biblioteca virtual, donde los usuarios pueden explorar diferentes categorías de libros, visualizar contenido multimedia y consultar una selección de libros recomendados.

El proyecto utiliza **HTML5, CSS3 y JavaScript** para construir una interfaz sencilla, moderna y funcional.

## 🖥️ Características

* 📖 Logo e identidad visual de Biblioteca Horizonte.
* 🔐 Formulario de ingreso mediante correo electrónico.
* 📚 Contador de libros seleccionados.
* 🗂️ Categorías de libros:

  * Novelas
  * Ciencia
  * Historia
  * Tecnología
  * Arte
  * Infantil
* 🎬 Video destacado sobre la biblioteca.
* 🖼️ Efecto visual al pasar el cursor sobre el video.
* ⭐ Sección de libros recomendados.
* ➕ Botones para seleccionar libros.
* 📱 Diseño organizado y adaptable a diferentes tamaños de pantalla.

## 📚 Libros recomendados

Actualmente, la página presenta los siguientes libros:

| Libro                    | Autor                    |
| ------------------------ | ------------------------ |
| **Cien años de soledad** | Gabriel García Márquez   |
| **Sapiens**              | Yuval Noah Harari        |
| **El principito**        | Antoine de Saint-Exupéry |

## 🛠️ Tecnologías utilizadas

### HTML5

Se utiliza para construir la estructura principal de la página, incluyendo:

* Encabezado
* Formulario de acceso
* Categorías
* Secciones de contenido
* Tarjetas de libros
* Video

### CSS3

Se utiliza para el diseño visual de la página:

* Colores y tipografías
* Distribución mediante Flexbox
* Tarjetas de libros
* Botones
* Espaciado y dimensiones
* Efectos `hover`
* Organización de las diferentes secciones

### JavaScript

Se utiliza para agregar interactividad a la página:

* Validación básica del formulario de ingreso.
* Mensaje de bienvenida al ingresar un correo.
* Contador de libros seleccionados.
* Interacción con los botones `+`.
* Control de reproducción y pausa del video al interactuar con él.

## 📁 Estructura del proyecto

```text
Biblioteca-Horizonte/
│
├── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   ├── images/
│   │   ├── Libro.png
│   │   ├── libros.png
│   │   ├── ciencia.png
│   │   ├── Estatua.png
│   │   ├── PC.png
│   │   ├── Pintura.png
│   │   ├── oso.png
│   │   ├── Prince.png
│   │   ├── Garcia.png
│   │   ├── Yuval.png
│   │   └── El principito.png
│   │
│   └── videos/
│       └── videoplayback.mp4
│
└── README.md
```

## ⚙️ Funcionamiento

### 🔐 Formulario de acceso

El usuario puede ingresar su correo electrónico en el formulario ubicado en la parte superior de la página.

JavaScript captura el correo ingresado y muestra un mensaje de bienvenida:

```text
¡Bienvenido/a! Has ingresado con el correo: usuario@email.com
```

Después de mostrar el mensaje, el campo vuelve a quedar vacío.

### 📚 Selección de libros

Cada libro recomendado cuenta con un botón `+`.

Al presionarlo, JavaScript aumenta el contador de libros seleccionados.

```text
Libros
seleccionados: 3
```

### 🎬 Video destacado

La página incorpora un video que se reproduce automáticamente y permanece en bucle.

Cuando el usuario coloca el cursor sobre el video, este se pausa y se activa el efecto visual correspondiente.

Al retirar el cursor, el video vuelve a reproducirse.

## 🎨 Diseño

La interfaz utiliza principalmente una combinación de:

* Blanco para el fondo y las tarjetas.
* Azul para la identidad visual.
* Gris claro para las secciones.
* Azul oscuro para botones.

El diseño busca mantener una apariencia limpia y ordenada, facilitando la navegación entre las diferentes secciones de la biblioteca.

## 🚀 Instalación y ejecución

1. Descargar o clonar el proyecto.
2. Mantener la estructura de carpetas indicada anteriormente.
3. Verificar que las imágenes y el video estén ubicados dentro de `static/images` y `static/videos`.
4. Abrir `index.html` en un navegador web.

No se requiere instalar dependencias externas para ejecutar el proyecto.

## 👨‍💻 Autor

**Agustín Sanchez**

Proyecto desarrollado con fines educativos para practicar el uso de:

* HTML5
* CSS3
* JavaScript
* Estructuración de proyectos web
* Manipulación del DOM
* Eventos e interactividad

## 📌 Estado del proyecto

🟢 **Proyecto funcional**

El proyecto cuenta actualmente con una interfaz principal, categorías, libros recomendados, formulario de acceso, contador de selección y contenido multimedia.
