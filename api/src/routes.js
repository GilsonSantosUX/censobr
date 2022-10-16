const router = require('express').Router();
const { status } = require('@helper/Status');

// Middlewares
const authMiddleware = require('./middlewares/auth');

// Controllers
const { authetication } = require("@controller/authentication");
const { authenticate } = require('@controller/authentication/projectController');
const { createUsuario, getUsuarioAll, getUsuarioUnique, altUsuario, delUsuario } = require('@controller/usuarioController');
const { createPessoa, getPessoaAll, getPessoaUnique,altPessoa,delPessoa } = require('@controller/pessoaController');
const { createEndereco, getEnderecoAll, getEnderecoUnique,altEndereco,delEndereco } = require('@controller/enderecoController');
const { createEntrevistado, getEntrevistadoAll, getEntrevistadoUnique, altEntrevistado, delEntrevistado } = require('@controller/entrevistadoController');
const { createRegiao, getRegiaoAll, getRegiaoUnique, altRegiao, delRegiao } = require('@controller/regiaoController');
const { createBairro, getBairroAll, getBairroUnique, altBairro, delBairro } = require('@controller/bairroController');
const { createRelatorio, getRelatorioAll, getRelatorioUnique, altRelatorio, delRelatorio } = require('@controller/relatorioController');
const { createPesquisa, getPesquisaAll, getPesquisaUnique, altPesquisa, delPesquisa } = require('@controller/pesquisaController');
const { createPapel, getPapelAll, getPapelUnique, altPapel, delPapel } = require('@controller/papelController');

// Routes Authentication

router.post('/auth', authetication);
router.post('/auth/usuario/cadastro', createUsuario);
router.use(authMiddleware);
router.get('/authenticate', authenticate);

// Routes Usuario
router.get('/auth/usuario', getUsuarioUnique);
router.get('/auth/usuarios', getUsuarioAll);
router.put('/auth/usuario/alterar', altUsuario);
router.delete('/auth/usuario/deletar', delUsuario);

// Routes Pessoa
router.post('/auth/pessoa/cadastro', createPessoa);
router.get('/auth/pessoa', getPessoaUnique);
router.get('/auth/pessoas', getPessoaAll);
router.put('/auth/pessoa/alterar', altPessoa);
router.delete('/auth/pessoa/deletar', delPessoa);

// Routes Entrevistado
router.post('/auth/entrevistado/cadastro', createEntrevistado);
router.get('/auth/entrevistados', getEntrevistadoAll);
router.get('/auth/entrevistado', getEntrevistadoUnique);
router.put('/auth/entrevistado/alterar', altEntrevistado);
router.delete('/auth/entrevistado/deletar', delEntrevistado);

// Routes Endereco
router.post('/auth/endereco/cadastro',createEndereco);
router.get('/auth/endereco',getEnderecoUnique);
router.get('/auth/enderecos',getEnderecoAll);
router.put('/auth/endereco/alterar',altEndereco);
router.delete('/auth/endereco/deletar',delEndereco);

// Routes Regiao
router.post('/auth/regiao/cadastro',createRegiao);
router.get('/auth/regiao',getRegiaoUnique);
router.get('/auth/regioes',getRegiaoAll);
router.put('/auth/regiao/alterar',altRegiao);
router.delete('/auth/regiao/deletar',delRegiao);

// Routes Bairro
router.post('/auth/bairro/cadastro',createBairro);
router.get('/auth/bairro',getBairroUnique);
router.get('/auth/bairros',getBairroAll);
router.put('/auth/bairro/alterar',altBairro);
router.delete('/auth/bairro/deletar',delBairro);

// Routes Relatorio
router.post('/auth/relatorio/cadastro',createRelatorio);
router.get('/auth/relatorio',getRelatorioUnique);
router.get('/auth/relatorios',getRelatorioAll);
router.put('/auth/relatorio/alterar',altRelatorio);
router.delete('/auth/relatorio/deletar', delRelatorio);

// Routes Pesquisa
router.post('/auth/pesquisa/cadastro',createPesquisa);
router.get('/auth/pesquisa',getPesquisaUnique);
router.get('/auth/pesquisas',getPesquisaAll);
router.put('/auth/pesquisa/alterar',altPesquisa);
router.delete('/auth/pesquisa/deletar', delPesquisa);

// Routes Papel
router.post('/auth/papel/cadastro',createPapel);
router.get('/auth/papel',getPapelUnique);
router.get('/auth/papeis',getPapelAll);
router.put('/auth/papel/alterar',altPapel);
router.delete('/auth/papel/deletar',delPapel);

// Router test Swagger
router.get('/swagger', (req, res) => {
    //#region Swagger description API 
    /*
        Alterar o arquivo swagger_output.json com as informações do endpoint
        #swagger.description = 'Descrição do endpoint'

        #swagger.parameters[''] = {
            description: 'Token',
            type: 'string',
            required: true,
            in: 'Atu',
            example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHVzdWFyaW8iOjYsImVtYWlsIjoiYnJ1bm8uZmVycmVpcmFAY2Vuc29ici5jb20uYnIiLCJwYXBlbCI6IkdTIiwiaWF0IjoxNjY0ODg4ODMxLCJleHAiOjE2NjQ5NzUyMzF9.O_8eGXCn-MO9uriHlgdBbsGkP43pgA9MBY5zVX24qFU',
        }
    */
    //#endregion
    try {
        // Verificar se esta chegando os dados pego corpo da requisicao
        if (!req.body) return res.status(status(401).reqStatus).send({ message: status(401).message, status: status(401).reqStatus });

        // Logica da controller
        const data = {}; // await create(req.body); // Chamanda da Model para buscar dados no banco de dados


        // Verificação de retorno se for vazio
        if (!data) return res.status(400).send({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

        // Retorno de sucesso da requisicao
        return res.status(status(200).reqStatus).send({ message: status(200).message, data, status: status(200).reqStatus });

    } catch (error) {
        // Tratativa de erro caso acontece do serviço cair ou ficar fora
        res.status(status(500).reqStatus).send({ message: status(500).message, status: status(500).reqStatus });
    }
});



module.exports = router;