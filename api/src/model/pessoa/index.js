const prisma = require('@db');
const md5 = require('md5');
module.exports = {
    async getPessoaAll(){
        try{
            return await prisma.Pessoa.findMany(
                {
                    select:{
                        idpessoa:true,
                        nome:true,
                        cpf:true,
                        rg:true,
                        Entrevistado:{
                            select:{
                                identrevistado:true,
                                genero:true,
                                idade:true
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
                stack: 'getPessoaAll()'
            });
        }
    },
    async getPessoaUnique(data){
        const {idpessoa } = data;
        if(!idpessoa) return false;
        try{
            return await prisma.Pessoa.findUnique({
                where: { idpessoa },
                select:{
                    idpessoa:true,
                    nome:true,
                    cpf:true,
                    rg:true,
                    Entrevistado:{
                        select:{
                            identrevistado:true,
                            genero:true,
                            idade:true
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
                stack: 'getPessoaUnique()'
            });
        }
    },
    async createPessoa(data){
        const { nome,cpf,rg } = data;
        try{
            
            let pessoa = await prisma.Pessoa.findFirst({
                where:{
                    cpf,
                }
            });
            
            if(pessoa) return {message:"Pessoa já cadastrada!"};
            
            pessoa = await prisma.Pessoa.create({
                data:{
                    nome,
                    cpf,
                    rg
                }
            });
            return pessoa;
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'createPessoa()'
            });
        }
    },
    async updatePessoa(data){
        const { idpessoa,nome,rg } = data;
        try{
            const pessoa = await prisma.Pessoa.update({
                where:{idpessoa},
                data:{
                    nome,
                    rg
                }
            });
            return pessoa;

        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'updatePessoa()'
            });
        }
    },
    async deletePessoa(cpf){
        const data = await prisma.Pessoa.findUnique({ where: { cpf },});
        try{
            if(!data) return false;
            return await prisma.Pessoa.delete({
                where: { cpf },
                select:{
                    nome:true,
                    cpf:true,
                    rg:true
                }
            });
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'deletePessoa()'
            });
        }
    }
}