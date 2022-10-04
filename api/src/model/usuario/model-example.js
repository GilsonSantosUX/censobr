const prisma = require('@db');
const md5 = require('md5');
module.exports = {
    async getEntidadeAll(){
        try{
            return await prisma.Entidade.findMany(
                {
                    select:{
                        idusuario:true,
                        Papel:{
                            select:{
                                sigla:true,
                                descricao:true
                            },
                            orderBy: {
                                nome: 'asc',
                            }
                        }
                    },
                    orderBy: {
                        nome: 'asc',
                    }
                }
            );
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'getEntidadeAll()'
            });
        }
    },
    async getEntidadeUnique(data){
        const {idusuario } = data;
        if(!idusuario) return false;
        try{
            return await prisma.Entidade.findUnique({
                where: { idusuario },
                select:{
                    idusuario:true,
                    nome:true,
                    cpf:true,
                    senha:false,
                    email:true,
                    Papel:{
                        select:{
                            sigla:true,
                            descricao:true
                        }
                    }
                }
            });
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'getEntidadeUnique()'
            });
        }
    },
    async createEntidade(data){
        const { nome,cpf,senha,email,fkpapel,supervisor, } = data;
        try{
            return await prisma.Entidade.create({
                data:{
                    nome,
                    cpf,
                    senha:md5(senha),
                    email,
                    fkpapel,
                    supervisor,
                }
            });
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'createEntidade()'
            });
        }
    },
    async updateEntidade(data){
        const { nome,fkpapel,supervisor } = data;
        try{
            return await prisma.Entidade.update({
                where: { cpf },
                data:{
                    nome,
                    fkpapel,
                    supervisor,
                }
            });
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'updateEntidade()'
            });
        }
    },
    async deleteEntidade(cpf){
        const data = await prisma.Entidade.findUnique({ where: { cpf },});
        try{
            if(!data) return false;
            return await prisma.Entidade.delete({
                where: { cpf },
                select:{
                    nome:true,
                    email:true,
                    Papel:{
                        select:{
                            silga:true,
                            descricao:true
                        }
                    },
                }
            });
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'deleteEntidade()'
            });
        }
    }
}