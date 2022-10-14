const prisma = require('@db');
const md5 = require('md5');
module.exports = {
    async getRelatorioAll(){
        try{
            return await prisma.Relatorio.findMany({
                select:{
                    idrelatorio:true,
                    datainicio:true,
                    fkpesquisa:true,
                    Pesquisa:{
                        select:{
                            idpesquisa:true,
                            fkentrevistado:true,
                            fkusuario:true,
                            fkquestionario:true,
                            datainicio:true,
                            datafim:true,
                            Entrevistado:{
                                select:{
                                    identrevistado:true,
                                    genero:true,
                                    idade:true,
                                    datanascimento:true,
                                    fkendereco:true,
                                    Pessoa:{
                                        select:{
                                            idpessoa:true,
                                            nome:true,
                                            cpf:true,
                                            rg:true
                                        }
                                    },
                                    Endereco:{
                                        select:{
                                            idendereco:true,
                                            pais:true,
                                            cep:true,
                                            estado:true,
                                            estadoSigla:true,
                                            cidade:true,
                                            cidadeSigla:true,
                                            fkbairro:true,
                                            logradouro:true,
                                            numero:true,
                                            complemento:true,
                                            Bairro:{
                                                select:{
                                                    idbairro:true,
                                                    nome:true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            Usuario:{
                                select:{
                                    idusuario:true,
                                    email:true,
                                    fkpapel:true,
                                    supervisor:true,
                                    Pessoa:{
                                        select:{
                                            idpessoa:true,
                                            nome:true,
                                            cpf:true
                                        }
                                    },
                                    Papel:{
                                        select:{
                                            idpapel:true,
                                            sigla:true,
                                            descricao:true
                                        }
                                    },
                                    Supervisiona:{
                                        select:{
                                            idusuario:true,
                                            email:true,
                                            fkpapel:true,
                                            supervisor:true,
                                            Pessoa:{
                                                select:{
                                                    idpessoa:true,
                                                    nome:true,
                                                    cpf:true
                                                }
                                            },
                                            Papel:{
                                                select:{
                                                    idpapel:true,
                                                    sigla:true,
                                                    descricao:true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            Questionario:{
                                select:{
                                    idquestionario:true
                                }
                            }
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
                stack: 'getRelatorioAll()'
            });
        }
    },
    async getRelatorioUnique(data){
        const {idrelatorio } = data;
        try{
            let relatorio = await prisma.Relatorio.findUnique({
                where: { idrelatorio },
                select:{
                    idrelatorio:true,
                    datainicio:true,
                    fkpesquisa:true,
                    Pesquisa:{
                        select:{
                            idpesquisa:true,
                            fkentrevistado:true,
                            fkusuario:true,
                            fkquestionario:true,
                            datainicio:true,
                            datafim:true,
                            Entrevistado:{
                                select:{
                                    identrevistado:true,
                                    genero:true,
                                    idade:true,
                                    datanascimento:true,
                                    fkendereco:true,
                                    Pessoa:{
                                        select:{
                                            idpessoa:true,
                                            nome:true,
                                            cpf:true,
                                            rg:true
                                        }
                                    },
                                    Endereco:{
                                        select:{
                                            idendereco:true,
                                            pais:true,
                                            cep:true,
                                            estado:true,
                                            estadoSigla:true,
                                            cidade:true,
                                            cidadeSigla:true,
                                            fkbairro:true,
                                            logradouro:true,
                                            numero:true,
                                            complemento:true,
                                            Bairro:{
                                                select:{
                                                    idbairro:true,
                                                    nome:true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            Usuario:{
                                select:{
                                    idusuario:true,
                                    email:true,
                                    fkpapel:true,
                                    supervisor:true,
                                    Pessoa:{
                                        select:{
                                            idpessoa:true,
                                            nome:true,
                                            cpf:true
                                        }
                                    },
                                    Papel:{
                                        select:{
                                            idpapel:true,
                                            sigla:true,
                                            descricao:true
                                        }
                                    },
                                    Supervisiona:{
                                        select:{
                                            idusuario:true,
                                            email:true,
                                            fkpapel:true,
                                            supervisor:true,
                                            Pessoa:{
                                                select:{
                                                    idpessoa:true,
                                                    nome:true,
                                                    cpf:true
                                                }
                                            },
                                            Papel:{
                                                select:{
                                                    idpapel:true,
                                                    sigla:true,
                                                    descricao:true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            Questionario:{
                                select:{
                                    idquestionario:true
                                }
                            }
                        }
                    }
                }
            });

            if(!relatorio) return 'Não encontramos relatório disponível!';

            return relatorio;
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'getRelatorioUnique()'
            });
        }
    },
    async createRelatorio(data){
        const { datainicio,fkpesquisa } = data;
        try{
            
            let relatorio = await prisma.Relatorio.findFirst({
                where:{ datainicio }
            });
            
            if(relatorio) return {message:"relatorio já cadastrada!"};
            
            relatorio = await prisma.Relatorio.create({
                data:{ 
                    datainicio,
                    fkpesquisa
                 }
            });
            return relatorio;
        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'createRelatorio()'
            });
        }
    },
    async updateRelatorio(data){
        const { idrelatorio,nome } = data;
        try{
            const relatorio = await prisma.Relatorio.update({
                where:{idrelatorio},
                data:{ nome }
            });
            return "Não é possível alterar um relatório!";

        }catch(error){
            throw console.log({
                name: 'Prisma error',
                message: "https://www.prisma.io/docs/reference/api-reference/error-reference#"+error.code,
                code: error.code,
                meta: error.meta,
                stack: 'updateRelatorio()'
            });
        }
    },
    async delRelatorio(data){
        const {idrelatorio} = data;
        const isrelatorio = await prisma.Relatorio.findUnique({ where: { idrelatorio }});
        try{
            if(!isrelatorio) return {message:'Registro não encontrado!'};
            return await prisma.relatorio.delete({
                where: { idrelatorio },
                select:{
                    idrelatorio:true,
                    datainicio:true,
                    fkpesquisa:true,
                    Pesquisa:{
                        select:{
                            idpesquisa:true,
                            fkentrevistado:true,
                            fkusuario:true,
                            fkquestionario:true,
                            datainicio:true,
                            datafim:true,
                            Entrevistado:{
                                select:{
                                    identrevistado:true,
                                    genero:true,
                                    idade:true,
                                    datanascimento:true,
                                    fkendereco:true,
                                    Pessoa:{
                                        select:{
                                            idpessoa:true,
                                            nome:true,
                                            cpf:true,
                                            rg:true
                                        }
                                    },
                                    Endereco:{
                                        select:{
                                            idendereco:true,
                                            pais:true,
                                            cep:true,
                                            estado:true,
                                            estadoSigla:true,
                                            cidade:true,
                                            cidadeSigla:true,
                                            fkbairro:true,
                                            logradouro:true,
                                            numero:true,
                                            complemento:true,
                                            Bairro:{
                                                select:{
                                                    idbairro:true,
                                                    nome:true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            Usuario:{
                                select:{
                                    idusuario:true,
                                    email:true,
                                    fkpapel:true,
                                    supervisor:true,
                                    Pessoa:{
                                        select:{
                                            idpessoa:true,
                                            nome:true,
                                            cpf:true
                                        }
                                    },
                                    Papel:{
                                        select:{
                                            idpapel:true,
                                            sigla:true,
                                            descricao:true
                                        }
                                    },
                                    Supervisiona:{
                                        select:{
                                            idusuario:true,
                                            email:true,
                                            fkpapel:true,
                                            supervisor:true,
                                            Pessoa:{
                                                select:{
                                                    idpessoa:true,
                                                    nome:true,
                                                    cpf:true
                                                }
                                            },
                                            Papel:{
                                                select:{
                                                    idpapel:true,
                                                    sigla:true,
                                                    descricao:true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            Questionario:{
                                select:{
                                    idquestionario:true
                                }
                            }
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
                stack: 'delRelatorio()'
            });
        }
    }
}