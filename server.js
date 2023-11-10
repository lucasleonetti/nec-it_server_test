const express = require('express');
const app = express();

// Define una ruta para la solicitud GET
app.get('/solicitudes_recibidas', (req, res) => {
    // Obtiene la lista de solicitudes
    const solicitudes_recibidas = [
        {
            "id": 1,
            "descripcion": "Asistencia IT",
            "estado": "Pendiente",
            "origen": "Gerencia",
            "prioridad": "Alta"
        },
        {
            "id": 2,
            "descripcion": "Error en la transaccion",
            "estado": "Pendiente",
            "origen": "Cantina",
            "prioridad": "Media"
        },
        {
            "id": 3,
            "descripcion": "Se Congelo la pantalla",
            "estado": "En proceso",
            "origen": "Atencion Alumnos",
            "prioridad": "Baja"
        },
        {
            "id": 4,
            "descripcion": "Se cayo el sistema",
            "estado": "Pendiente",
            "origen": "Cafeteria",
            "prioridad": "Alta"
        },
        {
            "id": 5,
            "descripcion": "Se cayo el sistema",
            "estado": "Pendiente",
            "origen": "Cantina",
            "prioridad": "Alta"
        }
    ];

    // Devuelve el cuerpo JSON
    res.send({ solicitudes_recibidas: solicitudes_recibidas });
});

app.get('/solicitudes_enviadas', (req, res) => {
    const solicitudes_enviadas = [
        {
            "id": 1,
            "descripcion": "Asistencia IT",
            "estado": "Pendiente",
            "prioridad": "Alta",
            "creacion": "10/10/2019",
            "destino": "Gerencia"

        },
        {
            "id": 2,
            "descripcion": "Error en la transaccion",
            "estado": "Pendiente",
            "prioridad": "Media",
            "creacion": "10/10/2019",
            "destino": "Cantina"
        },
        {
            "id": 3,
            "descripcion": "Se Congelo la pantalla",
            "estado": "En proceso",
            "prioridad": "Baja",
            "creacion": "10/10/2019",
            "destino": "Atencion Alumnos"
        },
        {
            "id": 4,
            "descripcion": "Se cayo el sistema",
            "estado": "Pendiente",
            "prioridad": "Alta",
            "creacion": "10/10/2019",
            "destino": "Cafeteria"
        },
        {
            "id": 5,
            "descripcion": "Se cayo el sistema",
            "estado": "Pendiente",
            "prioridad": "Alta",
            "creacion": "10/10/2019",
            "destino": "Cantina"
        }
    ];

    // Devuelve el cuerpo JSON
    res.send({ solicitudes_enviadas: solicitudes_enviadas });
});

app.get('/colaborators', (req, res) => {
    const colaborators = [
        {
            "id": 1,
            "nombre": "Juan",
            "apellido": "Perez",
            "email": "juanp@gmail.com",
            "telefono": "123456789",
            "departamento": "Sistemas"
        },
        {
            "id": 2,
            "nombre": "Maria",
            "apellido": "Gomez",
            "email": "mariag@gmail.com",
            "telefono": "123456789",
            "departamento": "Sistemas"
        },
        {
            "id": 3,
            "nombre": "Pedro",
            "apellido": "Gonzalez",
            "email": "pedrogon@gmail.com",
            "telefono": "123456789",
            "departamento": "Sistemas"
        },
    ];

    res.send({ colaborators: colaborators });

});

app.get('/tasks', (req, res) => {
    const tasks = [
        {
            "id": 1,
            "descripcion": "No Funciona la Base de Datos",
            "estado": "Pendiente",
            "prioridad": "Alta",
            "creacion": "10/10/2019",
            "destino": "Gerencia"

        },
        {
            "id": 2,
            "descripcion": "Error de conexion",
            "estado": "Pendiente",
            "prioridad": "Media",
            "creacion": "10/10/2019",
            "destino": "Cantina"
        },
        {
            "id": 3,
            "descripcion": "Se Congelo la pantalla",
            "estado": "Completada",
            "prioridad": "Baja",
            "creacion": "10/10/2019",
            "destino": "Atencion Alumnos"
        },
        {
            "id": 4,
            "descripcion": "Error de conexion",
            "estado": "Completada",
            "prioridad": "Alta",
            "creacion": "10/10/2019",
            "destino": "Cafeteria"
        },
        {
            "id": 5,
            "descripcion": "Se cayo el sistema",
            "estado": "Pendiente",
            "prioridad": "Alta",
            "creacion": "10/10/2019",
            "destino": "Cantina"
        }
    ];

    res.send({ tasks: tasks });

});


// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
