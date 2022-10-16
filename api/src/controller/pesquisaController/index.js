const pesquisaModel = require("@model/pesquisa");
const { status } = require("@helper/Status/index");
const { Papel } = require("@helper/");

module.exports = {


  async createPesquisa(req, res) {

    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/pesquisa/cadastro'
        #swagger.method = 'POST'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Pesquisa']
        #swagger.parameters['createPesquisa'] = {
           in: 'body',
           description: 'Informações da Pesquisa.',
           required: true,
           schema: { $ref: "#/definitions/Pesquisa" }
        }
    */
    //#endregion
    try {
      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      if (req.papel != Papel.GG && req.papel != Papel.MS) return res.status(403).json({ message: 'Você não possui permissão para criar Pesquisa!', status: status(403).reqStatus });

      const data = await pesquisaModel.createPesquisa(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });
      /* #swagger.responses[200] = { 
          schema: { $ref: "#/definitions/Pesquisa" },
          description: 'Pesquisa cadastrada!.' 
      }*/

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500] #swagger.end
    }
  },
  async getPesquisaAll(req, res) {
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/pesquisas'
        #swagger.method = 'GET'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Pesquisa']
        #swagger.parameters['getPesquisaAll'] = {
           in: 'body',
           description: 'Informações da Pesquisa.',
           required: true,
           schema: { $ref: "#/definitions/Pesquisa" }
        }
    */
    //#endregion
    try {
      const data = await pesquisaModel.getPesquisaAll();

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });
      /* #swagger.responses[200] = { 
          schema: [{ $ref: "#/definitions/Pesquisa" }],
          description: 'Lista de pesquisas!.'
      }*/

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500] #swagger.end
    }
  },
  async getPesquisaUnique(req, res) {
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/pesquisa'
        #swagger.method = 'GET'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Pesquisa']
        #swagger.parameters['getPesquisaUnique'] = {
           in: 'body',
           description: 'Informações da Pesquisa.',
           required: true,
           schema: { $ref: "#/definitions/Pesquisa" }
        }
    */
    //#endregion
    try {

      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      const data = await pesquisaModel.getPesquisaUnique(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500]
    }
  },
  async altPesquisa(req, res) {
    // TODO Verifica prq o alterar não esta ficando dentro da TAG Pesquisa
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/pesquisa/alterar'
        #swagger.method = 'PUT'
        #swagger.description = 'Descrição do endpoint'
        #swagger.tags = ['Pesquisa']
        #swagger.produces = ["application/json"]
        #swagger.parameters['altPesquisa'] = {
           in: 'body',
           description: 'Informações da Pesquisa.',
           required: true,
           schema: { $ref: "#/definitions/Pesquisa" }
        }
    */
    //#endregion
    try {

      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      const data = await pesquisaModel.updatePesquisa(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500]
    }
  },
  async delPesquisa(req, res) {
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/pesquisa/deletar'
        #swagger.method = 'DELETE'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Pesquisa']
        #swagger.parameters['delPesquisa'] = {
           in: 'body',
           description: 'Informações da Pesquisa.',
           required: true,
           schema: { $ref: "#/definitions/Pesquisa" }
        }
    */
    //#endregion
    try {

      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      const data = await pesquisaModel.deletePesquisa(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });
      /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Pesquisa" },
        description: 'Pesquisa Deletada!.' 
      }*/

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500]
    }
  }
}
