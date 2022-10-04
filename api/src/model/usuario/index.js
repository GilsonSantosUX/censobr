const prisma = require('@db');
const md5 = require('md5');
module.exports = {
    async getUsuarioAll(){
        try{
            return await prisma.Usuario.findMany(
                {
                    select:{
                        idusuario:true,
                        email:true,
                        Pessoa:{
                            select:{
                                nome:true,
                                cpf:true
                            }
                        },
                        Papel:{
                            select:{
                                sigla:true,
                                descricao:true
                            }
                        },
                        Supervisiona:{
                            select:{
                                email:true,
                                Pessoa:{
                                    select:{
                                        nome:true,
                                        cpf:true
                                    }
                                },
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
                    email:true,
                    Pessoa:{
                        select:{
                            nome:true,
                            cpf:true
                        }
                    },
                    Papel:{
                        select:{
                            sigla:true,
                            descricao:true
                        }
                    },
                    Supervisiona:{
                        select:{
                            email:true,
                            Pessoa:{
                                select:{
                                    nome:true,
                                    cpf:true
                                }
                            },
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
        const { senha,email,fkpapel,supervisor,nome,cpf,rg } = data;
        try{
            const pessoa = await prisma.Pessoa.create({
                data:{
                    nome,
                    cpf,
                    rg
                }
            });

            const usuario = await prisma.Usuario.create({
                data:{
                    email,
                    senha:md5(senha),
                    fkpapel:fkpapel,
                    fkpessoa:pessoa.idpessoa,
                    supervisor,
                }
            });

            return {usuario,pessoa};

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
        const { idusuario,fkpapel,supervisor,idpessoa,nome } = data;
        try{
            const pessoa = await prisma.Pessoa.update({
                where:{idpessoa},
                data:{
                    nome,
                    rg
                }
            })

            const usuario = await prisma.Usuario.update({
                where: { idusuario },
                data:{
                    fkpapel,
                    supervisor
                }
            });

            return {usuario,pessoa};
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