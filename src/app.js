// File: src/app.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
    const originalSetHeader = res.setHeader;
    res.setHeader = function (name, value) {
        console.log(`[DEBUG] Setting Header: ${name}: ${value}`);
        originalSetHeader.call(this, name, value);
    };
    next();
});

app.use(cors({
    origin: [
        'http://localhost:4200',
        'https://cafeconcarlos.com',
        'http://cafeconcarlos.com',
        'https://portfolio.cafeconcarlos.com',
        'http://portfolio.cafeconcarlos.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));

app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

// Global error handler
app.use((err, req, res, next) => {
    console.error('Global error:', err);
    if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Server error' });
    }
});

module.exports = app;