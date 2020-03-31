const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/login', SessionController.create);

routes.get('/ongs', OngController.getAll);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.getAll);

routes.get('/incidents', IncidentsController.getAll);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;