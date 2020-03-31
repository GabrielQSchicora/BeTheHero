const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Utiliza cors para segurança
app.use(cors());

//Tipo de resposta
app.use(express.json());

//Rotas
app.use(routes);

//Porta setada
app.listen(3333);