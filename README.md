# Server test for nec-it platform

Aplicación de servidor en Node.js que maneja solicitudes HTTP para obtener información sobre solicitudes recibidas, solicitudes enviadas y colaboradores.

Desarrollada como prueba para las solicitudes http de la plataforma nec-it.
[nec-it_frontend](https://github.com/lucasleonetti/nec_it_frontend)

Aquí están las rutas que se definen en el archivo `server.js`

- `/solicitudes_recibidas`: Devuelve un JSON con una lista de solicitudes recibidas.
- `/solicitudes_enviadas`: Devuelve un JSON con una lista de solicitudes enviadas.
- `/colaborators`: Devuelve un JSON con una lista de colaboradores.
- `/tasks`: Devuelve un JSON con una lista de tareas.

Para ejecutar este proyecto, necesitarás tener Node.js y npm instalados en tu máquina. Luego, puedes seguir estos pasos:

1. Instala las dependencias del proyecto con el comando `npm install` en la terminal.
2. Ejecuta el servidor con el comando `node server.js`.
