const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de parâmetros:
 * 
 * Query: Parametros nomeados enviados na rota após "?" (Filtros,paginação). response.query
 * Route: Parametros utilizados para identificar recursos. response.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. response.params
 */

app.listen(3333);