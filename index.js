const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConection } = require('./database/config');


// Crea APP Server
const app = express();

// Database
dbConection();

// CORS
app.use(cors());

// Directorio Publico
app.use(express.static('public'))

// Lectura y Parseo
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/user', require('./routes/usersRoutes'))

// Escuchar peticiones

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})