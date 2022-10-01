const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/app.js','./src/controller/*/*.js'];

swaggerAutogen(outputFile, endpointsFiles);