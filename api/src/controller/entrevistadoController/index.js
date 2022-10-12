const entrevistadoModel = require("@model/entrevistado");
const { status } = require("@helper/Status/index");
const { Papel } = require("@helper/");

module.exports = {
    //#region CREATE
    async createentrevistado(req, res) {
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
        try {
            if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

            const data = await entrevistadoModel.createentrevistado(req.body);

            if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

            return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

        } catch (error) {
            res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus });
        }
    },
    //#endregion

    //#region GETALL
    async getentrevistadoAll(req, res) {
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
        try {
            const data = await entrevistadoModel.getentrevistadoAll();

            if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

            return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

        } catch (error) {
            res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus });
        }
    },
    //#endregion

    //#region GETUNIQUE
    async getentrevistadoUnique(req, res) {
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
        try {

            if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

            const data = await entrevistadoModel.getentrevistadoUnique(req.body);

            if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

            return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

        } catch (error) {
            res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus });
        }
    },
    //#endregion

    //#region POSTUNIQUE
    async altentrevistado(req, res) {
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
        try {
            if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });
            
            const data = await entrevistadoModel.updateentrevistado(req.body);

            if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

            return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

        } catch (error) {
            res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus });
        }
    },
    //#endregion

    //#region DELETEUNIQUE
    async delentrevistado(req, res) {
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
        try {
            if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });
            const data = await entrevistadoModel.deleteentrevistado(req.body);

            if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

            return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

        } catch (error) {
            res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus });
        }
    },
    //#endregion
}