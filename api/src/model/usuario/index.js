const prisma = require('@db');
const md5 = require('md5');
module.exports = {
    async getUsuarioAll(){
        try{
            return await prisma.Usuario.findMany(
                {
                    select:{
                        idusuario:true,
                        cpf:true,
                        nome:true,
                        email:true,
                        Papel:{
                            select:{
                                sigla:true,
                                descricao:true
                            }
                        },
                        Supervisiona:{
                            select:{
                                nome:true,
                                email:true
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
                stack: 'getUsuarioAll()'
            });
        }
    },
    async getUsuarioAuth(data){
        const {email} = data;
        if(!email) return false;
        try{
            return await prisma.Usuario.findUnique({
                where: { email },
                select:{
                    idusuario:true,
                    email:true,
                    senha:true,
                    Papel:{
                        select:{
                            sigla:true
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
                stack: 'getUsuarioAuth()'
            });
        }
    },
    async getUsuarioUnique(data){
        const {idusuario } = data;
        if(!idusuario) return false;
        try{
            return await prisma.Usuario.findUnique({
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
                    },
                    Supervisiona:{
                        select:{
                            nome:true,
                            email:true
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
                stack: 'getUsuarioUnique()'
            });
        }
    },
    async createUsuario(data){
        const { nome,cpf,senha,email,fkpapel,supervisor, } = data;
        try{
            return await prisma.Usuario.create({
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
                stack: 'createUsuario()'
            });
        }
    },
    async updateUsuario(data){
        const { nome,fkpapel,supervisor } = data;
        try{
            return await prisma.Usuario.update({
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
                stack: 'updateUsuario()'
            });
        }
    },
    async deleteUsuario(cpf){
        const data = await prisma.Usuario.findUnique({ where: { cpf },});
        try{
            if(!data) return false;
            return await prisma.Usuario.delete({
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
                stack: 'deleteUsuario()'
            });
        }
    }
}