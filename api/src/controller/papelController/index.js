const papelModel = require("@model/papel");
const { status } = require("@helper/Status/index");
const { Papel } = require("@helper/");

module.exports = {
  //#region createPapel
  async createPapel(req, res) {

    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/papel/cadastro'
        #swagger.method = 'POST'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Papel']
        #swagger.parameters['createPapel'] = {
           in: 'body',
           description: 'Informações da Papel.',
           required: true,
           schema: { $ref: "#/definitions/Papel" }
        }
    */
    //#endregion
    try {
      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      if (req.papel != Papel.GG && req.papel != Papel.MS) return res.status(403).json({ message: 'Você não possui permissão para criar Papel!', status: status(403).reqStatus });

      const data = await papelModel.createPapel(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });
      /* #swagger.responses[200] = { 
          schema: { $ref: "#/definitions/Papel" },
          description: 'Papel cadastrada!.' 
      }*/

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500] #swagger.end
    }
  },
  //#endregion createPapel

//#region getPapelAll
  async getPapelAll(req, res) {
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/papeis'
        #swagger.method = 'GET'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Papel']
        #swagger.parameters['getPapelAll'] = {
           in: 'body',
           description: 'Informações da Papel.',
           required: true,
           schema: { $ref: "#/definitions/Papel" }
        }
    */
    //#endregion
    try {
      const data = await papelModel.getPapelAll();

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });
      /* #swagger.responses[200] = { 
          schema: [{ $ref: "#/definitions/Papel" }],
          description: 'Lista de papels!.'
      }*/

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500] #swagger.end
    }
  },
  //#endregion getPapelAll

  //#region getPapelUnique
  async getPapelUnique(req, res) {
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/papel'
        #swagger.method = 'GET'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Papel']
        #swagger.parameters['getPapelUnique'] = {
           in: 'body',
           description: 'Informações da Papel.',
           required: true,
           schema: { $ref: "#/definitions/Papel" }
        }
    */
    //#endregion
    try {

      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      const data = await papelModel.getPapelUnique(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500]
    }
  },
  //#endregion getPapelUnique

  //#region altPapel
  async altPapel(req, res) {
    // TODO Verifica prq o alterar não esta ficando dentro da TAG Papel
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/papel/alterar'
        #swagger.method = 'PUT'
        #swagger.description = 'Descrição do endpoint'
        #swagger.tags = ['Papel']
        #swagger.produces = ["application/json"]
        #swagger.parameters['altPapel'] = {
           in: 'body',
           description: 'Informações da Papel.',
           required: true,
           schema: { $ref: "#/definitions/Papel" }
        }
    */
    //#endregion
    try {

      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      const data = await papelModel.updatePapel(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500]
    }
  },
  //#endregion altPapel

  //#region delPapel
  async delPapel(req, res) {
    //#region Swagger
    /*
        #swagger.start
        #swagger.path = '/papel/deletar'
        #swagger.method = 'DELETE'
        #swagger.description = 'Descrição do endpoint'
        #swagger.produces = ["application/json"]
        #swagger.tags = ['Papel']
        #swagger.parameters['delPapel'] = {
           in: 'body',
           description: 'Informações da Papel.',
           required: true,
           schema: { $ref: "#/definitions/Papel" }
        }
    */
    //#endregion
    try {

      if (!req.body) return res.status(status(401).reqStatus).json({ message: status(401).message, status: status(401).reqStatus });

      const data = await papelModel.deletePapel(req.body);

      if (!data) return res.status(400).json({ message: 'Não foi possível atualizar essa informação!', data: null, status: status(400).reqStatus });

      return res.status(status(200).reqStatus).json({ message: status(200).message, data, status: status(200).reqStatus });
      /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Papel" },
        description: 'Papel Deletada!.' 
      }*/

    } catch (error) {
      res.status(status(500).reqStatus).json({ message: status(500).message, status: status(500).reqStatus }); // #swagger.responses[500]
    }
  }
  //#endregion delPapel
}
