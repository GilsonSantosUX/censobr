const prisma = require('@db');
const md5 = require('md5');
module.exports = {
  //#region getPapelAll
  async getPapelAll() {
    try {
      return await prisma.Papel.findMany(
        {
          select: {
            sigla: true,
            descricao: true
          },
          orderBy: {
            nome: 'asc',
          }
        }
      );
    } catch (error) {
      throw console.log({
        name: 'Prisma error',
        message: "https://www.prisma.io/docs/reference/api-reference/error-reference#" + error.code,
        code: error.code,
        meta: error.meta,
        stack: 'getPapelAll()'
      });
    }
  },
  //#endregion getPapelAll

  //#region getPapelUnique
  async getPapelUnique(data) {
    const { idpapel } = data;
    if (!idpapel) return false;
    try {
      return await prisma.Papel.findUnique({
        where: { idpapel },
        select: {
          sigla: true,
          descricao: true
        }
      });
    } catch (error) {
      throw console.log({
        name: 'Prisma error',
        message: "https://www.prisma.io/docs/reference/api-reference/error-reference#" + error.code,
        code: error.code,
        meta: error.meta,
        stack: 'getPapelUnique()'
      });
    }
  },
  //#endregion getPapelUnique

  //#region createPapel
  async createPapel(data) {
    const { sigla, descricao } = data;
    try {
      return await prisma.Papel.create({
        data: {
          sigla,
          descricao,
        }
      });
    } catch (error) {
      throw console.log({
        name: 'Prisma error',
        message: "https://www.prisma.io/docs/reference/api-reference/error-reference#" + error.code,
        code: error.code,
        meta: error.meta,
        stack: 'createPapel()'
      });
    }
  },
  //#endregion createPapel

  //#region updatePapel
  async updatePapel(data) {
    const { sigla, descricao } = data;
    try {
      return await prisma.Papel.update({
        where: { idpapel },
        data: {
          sigla,
          descricao,
        }
      });
    } catch (error) {
      throw console.log({
        name: 'Prisma error',
        message: "https://www.prisma.io/docs/reference/api-reference/error-reference#" + error.code,
        code: error.code,
        meta: error.meta,
        stack: 'updatePapel()'
      });
    }
  },
  //#endregion updatePapel

  //#region deletePapel
  async deletePapel(idpapel) {
    const data = await prisma.Papel.findUnique({ where: { idpapel }, });
    try {
      if (!data) return false;
      return await prisma.Papel.delete({
        where: { idpapel },
        select: {
          sigla: true,
          descricao: true
        }
      });
    } catch (error) {
      throw console.log({
        name: 'Prisma error',
        message: "https://www.prisma.io/docs/reference/api-reference/error-reference#" + error.code,
        code: error.code,
        meta: error.meta,
        stack: 'deletePapel()'
      });
    }
  }
  //#endregion deletePapel
}