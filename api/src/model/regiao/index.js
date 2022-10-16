const prisma = require('@db');
const md5 = require('md5');
module.exports = {
    async getRegiaoAll(){
        try{
            return await prisma.Regiao.findMany(
                {
                    select:{
                        idregiao:true,
                        pkestado:true,
                        pkcidade:true,
                        zona:true,
                        fkbairro:true,
                        Bairro:{
                            select:{
                                idbairro:true,
                                nome:true
                            }
                        }
                    }
                }
            );
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'getRegiaoAll()'
            });
        }
    },
    async getRegiaoUnique(data){
        const {idregiao } = data;
        if(!idregiao) return false;
        try{
            return await prisma.Regiao.findUnique({
                where: { idregiao },
                select:{
                    idregiao:true,
                    pkestado:true,
                    pkcidade:true,
                    fkbairro:true,
                    zona:true,
                    Bairro:{
                        select:{
                            idbairro:true,
                            nome:true
                        }
                    }
                }
            });
        }catch(error){
            throw console.log({
                error,
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'getRegiaoUnique()'
            });
        }
    },
    async createRegiao(data){
        const { pkestado,pkcidade,fkbairro,zona } = data;
        try{
            
            let regiao = await prisma.Regiao.findFirst({
                where:{
                    pkestado,
                    pkcidade,
                    fkbairro
                }
            });
            
            if(regiao) return {message:"Regiao já cadastrada!"};
            
            regiao = await prisma.Regiao.create({
                data:{
                    pkestado,
                    pkcidade,
                    fkbairro,
                    zona
                }
            });
            return regiao;
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'createRegiao()'
            });
        }
    },
    async updateRegiao(data){
        const { idregiao,pkestado,pkcidade,fkbairro,zona } = data;
        try{
            const regiao = await prisma.Regiao.update({
                where:{idregiao},
                data:{
                    pkestado,
                    pkcidade,
                    fkbairro,
                    zona
                }
            });
            return regiao;

        }catch(error){
            throw console.log({
                error,
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'updateRegiao()'
            });
        }
    },
    async delRegiao(data){
        const {idregiao} = data;
        const isRegiao = await prisma.Regiao.findUnique({ where: { idregiao }});
        try{
            if(!isRegiao) return {message:'Registro não encontrado!'};
            return await prisma.Regiao.delete({
                where: { idregiao },
                select:{
                    idregiao:true,
                    pkestado:true,
                    pkcidade:true,
                    fkbairro:true,
                    zona:true,
                    Bairro:{
                        select:{
                            idbairro:true,
                            nome:true
                        }
                    }
                }
            });
        }catch(error){
            throw console.log({
                error,
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'deleteRegiao()'
            });
        }
    }
}