const express = require('express');
const moviesApi = require('./routes/movies');
const app = express();
const { config } = require('./config/index.js');
const { logErrors, wrapErrors ,errorHandler } = require('./middlewares/errorHandler');
const { notFoundHandler } = require('./middlewares/notFoundHandler')
const cors = require('cors');

//midleware para body parser
app.use(express.json());

//Cross origin access
app.use(cors());

//Routes
moviesApi(app)

//Catch Errors  
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);

//Catch 404
app.use(notFoundHandler)

app.listen(config.port, () => {
    console.log(`Escuchando en el puerto: ${config.port}`)
})