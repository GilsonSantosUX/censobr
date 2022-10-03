const router = require('express').Router();
const { status } = require('@helper/Status');

// Middlewares
const authMiddleware = require('./middlewares/auth');

// Controllers
const { getAll, getUnique } = require('@controller/user/read');
const { createUser } = require('@controller/user/create');
const { deleteUser } = require("@controller/user/delete");
const  { authetication } = require("@controller/authentication");
const { authenticate } = require('@controller/authentication/projectController');
const { getController } = require('@controller/user/model-controller.js');

// Routes Authentication

router.post('/auth',authetication);
router.use(authMiddleware);
router.get('/authenticate',authenticate);
router.get('/modelController',getController);

// Routes User

router.get('/users',getAll);
router.get('/user',getUnique);
router.post('/user/create',createUser);
router.delete('/user/delete',deleteUser);

// Router test Swagger
router.get('/swagger',(req,res)=>{
    //#region Swagger description API 
        /*
            Alterar o arquivo swagger_output.json com as informações do endpoint
            #swagger.description = 'Descrição do endpoint'

            #swagger.parameters[''] = {
                description: 'Nome do parametro',
                type: 'string',
                required: true,
                in: 'body',
                example: 'admin@censo.com.br',
            }
        */
       //#endregion
        try{
            // Verificar se esta chegando os dados pego corpo da requisicao
            if(!req.body) return res.status(statustus(401).reqStatus).send({message:status(401).message,status:status(401).reqStatus});

            // Logica da controller
            const data = {};// await create(req.body); // Chamanda da Model para buscar dados no banco de dados

            
            // Verificação de retorno se for vazio
            if(!data) return res.status(400).send({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            // Retorno de sucesso da requisicao
            return res.status(statustus(200).reqStatus).send({message:statustus(200).message,data,status:statustus(200).reqStatus});
            
        }catch(error){
            // Tratativa de erro caso acontece do serviço cair ou ficar fora
            res.status(statustus(500).reqStatus).send({message:statustus(500).message,status:statustus(500).reqStatus});
        }
});



module.exports = router;