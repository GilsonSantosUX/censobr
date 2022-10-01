const { create } = require("@model/user");
const { status } = require("@helper/Status/index");

module.exports = {
    async getController(req,res){
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
            if(!req.body) return res.status(status(401).reqStatus).json({message:status(401).message,status:status(401).reqStatus});

            // Logica da controller
            const data = await create(req.body); // Chamanda da Model para buscar dados no banco de dados
            
            // Verificação de retorno se for vazio
            if(!data) return res.status(400).json({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            // Retorno de sucesso da requisicao
            return res.status(status(200).reqStatus).json({message:status(200).message,data,status:status(200).reqStatus});
            
        }catch(error){
            // Tratativa de erro caso acontece do serviço cair ou ficar fora
            res.status(status(500).reqStatus).json({message:status(500).message,status:status(500).reqStatus});
        }
    }
}