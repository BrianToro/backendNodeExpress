const express = require('express');
const moviesApi = require('./routes/movies');
const app = express();
const { config } = require('./config/index.js');

moviesApi(app)

app.listen(config.port, () => {
    console.log(`Escuchando en el puerto: ${config.port}`)
})