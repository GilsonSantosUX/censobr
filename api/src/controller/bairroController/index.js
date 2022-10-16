const bairroModel = require("@model/bairro");
const { status } = require("@helper/Status/index");
const { Papel } = require("@helper/");

module.exports = {
    async createBairro(req,res){
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
            if(!req.body) return res.status(status(401).reqStatus).json({message:status(401).message,status:status(401).reqStatus});
            
            if(req.papel != Papel.GG && req.papel != Papel.MS) return res.status(403).json({message:'Você não possui permissão para criar Usuário!',status:status(403).reqStatus});

            const data = await bairroModel.createBairro(req.body);
            
            if(!data) return res.status(400).json({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            return res.status(status(200).reqStatus).json({message:status(200).message,data,status:status(200).reqStatus});
            
        }catch(error){
            res.status(status(500).reqStatus).json({message:status(500).message,status:status(500).reqStatus});
        }
    },
    async getBairroAll(req,res){
        //#region Swagger description API 
        /*
            Alterar o arquivo swagger_output.json com as informações do endpoint
            #swagger.description = 'Retorna um array de bairros'

            #swagger.parameters[''] = {
                description: 'Token',
                type: 'string',
                required: true,
                in: 'Authorization',
                example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHVzdWFyaW8iOjYsImVtYWlsIjoiYnJ1bm8uZmVycmVpcmFAY2Vuc29ici5jb20uYnIiLCJwYXBlbCI6IkdTIiwiaWF0IjoxNjY0ODg4ODMxLCJleHAiOjE2NjQ5NzUyMzF9.O_8eGXCn-MO9uriHlgdBbsGkP43pgA9MBY5zVX24qFU',
            }
        */
       //#endregion
        try{
            const data = await bairroModel.getBairroAll();
            
            if(!data) return res.status(400).json({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            return res.status(status(200).reqStatus).json({message:status(200).message,data,status:status(200).reqStatus});
            
        }catch(error){
            res.status(status(500).reqStatus).json({message:status(500).message,status:status(500).reqStatus});
        }
    },
    async getBairroUnique(req,res){
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
            
            if(!req.body) return res.status(status(401).reqStatus).json({message:status(401).message,status:status(401).reqStatus});

            const data = await bairroModel.getBairroUnique(req.body);
            
            if(!data) return res.status(400).json({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            return res.status(status(200).reqStatus).json({message:status(200).message,data,status:status(200).reqStatus});
            
        }catch(error){
            res.status(status(500).reqStatus).json({message:status(500).message,status:status(500).reqStatus});
        }
    },
    async altBairro(req,res){
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
            
            if(!req.body) return res.status(status(401).reqStatus).json({message:status(401).message,status:status(401).reqStatus});

            const data = await bairroModel.updateBairro(req.body);
            
            if(!data) return res.status(400).json({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            return res.status(status(200).reqStatus).json({message:status(200).message,data,status:status(200).reqStatus});
            
        }catch(error){
            res.status(status(500).reqStatus).json({message:status(500).message,status:status(500).reqStatus});
        }
    },
    async delBairro(req,res){
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
            
            if(!req.body) return res.status(status(401).reqStatus).json({message:status(401).message,status:status(401).reqStatus});

            const data = await bairroModel.delBairro(req.body);
            
            if(!data) return res.status(400).json({message:'Não foi possível atualizar essa informação!',data:null,status:status(400).reqStatus});

            return res.status(status(200).reqStatus).json({message:status(200).message,data,status:status(200).reqStatus});
            
        }catch(error){
            res.status(status(500).reqStatus).json({message:status(500).message,status:status(500).reqStatus});
        }
    }
}
