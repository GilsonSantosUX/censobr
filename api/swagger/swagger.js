const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/app.js','./src/controller/*/*.js'];

swaggerAutogen(outputFile, endpointsFiles);

const doc = {
    info: {
        version: "1.0.0",
        title: "CENSOBR",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        api_key: {
            type: "token",
            name: "token",
            in: "header"
        },
        petstore_auth: {
            type: "Bearer",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
    definitions: {
        Usuario: {
            idusuario:1,
            email: "admin@censobr.com.br",
            senha: '1#@1223123asd123sa2#$@sd21DSA12128asdy123',
            papel:{
                sliga:'MS',
                descricao:'Administrador'
            },
            pessoa:{
                idpessoa:1,
                nome: "Admin CensoBR",
                cpf: '98765432100',
                rg: '00000001'
            },
            supervisor:{
                idusuario:1
            }
        },
        Pessoa: {
            idpessoa:1,
            nome: "Admin CensoBR",
            cpf: '98765432100',
            rg: '00000001'
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc);