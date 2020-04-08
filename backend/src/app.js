const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

//Utiliza cors para segurança
app.use(cors());

//Tipo de resposta
app.use(express.json());

//Rotas
app.use(routes);

//Celebrate errors
app.use(errors());

module.exports = app;