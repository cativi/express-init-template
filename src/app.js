// app.js

const express = require('express');
const cors = require('cors');
const app = express();

// Update this CORS configuration
app.use(cors({
    origin: [
        'https://cafeconcarlos.com',
        'http://cafeconcarlos.com',
        'https://portfolio.cafeconcarlos.com',
        'http://portfolio.cafeconcarlos.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

// Configuración de rutas
app.use('/api', require('./routes/api'));
app.get('/', (req, res) => {
    res.send('Ruta en el Backend de OCI');
});

module.exports = app;