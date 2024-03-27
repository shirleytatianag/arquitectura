# Backend Node.js con gestión de productos y autenticación de usuarios (AOAS-2024-P1)

Este proyecto de backend desarrollado en Node.js ofrece una API con endpoints para la gestión de productos y autenticación de usuarios, utilizando JSON Web Tokens (JWT) para la seguridad. Cada ruta está protegida mediante autenticación válida, lo que requiere el envío del token correspondiente en las solicitudes.

## Características

- **Gestión de Productos**: Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos.
- **Autenticación de Usuarios**: Utiliza JWT para la autenticación de usuarios, lo que proporciona un sistema seguro y eficiente.
- **Base de Datos PostgreSQL**: Se utiliza PostgreSQL como base de datos para almacenar los datos de productos y usuarios.
- **Validaciones Generales**: Se aplican validaciones generales en las solicitudes para garantizar la integridad y seguridad de los datos.

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/shirleytatianag/arquitectura.git
```

2. Instalación de las dependencias:

```bash
cd <Nombre-proyecto>
npm install
```

3. Configura la base de datos PostgreSQL:

    - Crea una base de datos PostgreSQL.
    - Actualiza las variables de entorno del archivo `.env` con la información de tu base de datos PostgreSQL.


5. Instala e Inicia el servidor:

```bash
npm i -g nodemon
npm run dev
```

## Uso

Asegúrate de tener el servidor corriendo localmente. Puedes enviar solicitudes a los siguientes endpoints:

- `/producto`: Endpoint para la gestión de productos.
- `/auth`: Endpoint para iniciar sesión y obtener un token JWT.

Recuerda incluir el token JWT en la cabecera de las solicitudes a las rutas protegidas.

## Contribución

Si quieres contribuir a este proyecto, ¡eres bienvenido! Siéntete libre de abrir un issue o enviar un pull request.

---

¡Gracias por utilizar nuestro backend! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros. ¡Esperamos que sea útil para tu aplicación! -Laura Sepúlveda y Shirley García-2024
