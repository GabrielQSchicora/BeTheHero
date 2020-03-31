/*
* Tipos de parâmetros
*
* Query Params: Parâmetros nomeados enviados pela rota após uma interrogação (http://localhost:3333/users?name=gabriel) - (request.query)
* Route Params: Parãmetros utilizados para identificar recursos, como buscar pelo id (http://localhost:3333/users/:id) - (request.params)
* request Body: Corpo da requisição, utilizado para alterar ou criar recursos (Enviado no corpo da requisição) - (request.body)
*/

/*
* Quando subir o app para produção, trocar o cors para:
*
* app.use(cors({
*   origin: 'http://minhaurl.com.br'
* }));
*
*/