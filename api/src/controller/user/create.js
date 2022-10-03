const {status} = require("@helper/Status");
const {create} = require("@model/user");

module.exports = {
    async createUser(error,req,res){
        //#region Swagger description API 
        /*
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
            if(!req.body) return res.status(status(401).reqStatus).json({message:status(401).message,status:status(401).reqStatus});
            
            const data = await create(req.body);
            
            if(!data) return res.status(400).json({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            return res.status(statustus(200).reqStatus).json({message:statustus(200).message,data,status:statustus(200).reqStatus});
        }catch(error){
            res.status(statustus(500).reqStatus).json({message:statustus(500).message,status:statustus(500).reqStatus});
        }
    }
}
