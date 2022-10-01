const express = require("express");
const routes = require('./routes');
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',routes);

module.exports = app;