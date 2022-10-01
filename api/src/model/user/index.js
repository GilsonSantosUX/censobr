const prisma = require('@db');
const md5 = require('md5');
module.exports = {
    async getAll(){
        return await prisma.pessoaList.findMany(
            {
                select:{
                    id:true,
                    cpf:true,
                    name:true,
                    email:true,
                    supervisor:true
                }
            }
        );
    },
    async getAuth(data){
        return await prisma.pessoaList.findFirst({
            where: { email:data.u_email },
            select:{
                id:true,
                cpf:true,
                email:true,
                password:true
            }
        });
    },
    async getUnique(data){
        const {u_cpf} = data;
        return await prisma.pessoaList.findUnique({
            where: { cpf: u_cpf },
            select:{
                cpf:true,
                name:true,
                email:true,
                supervisor:true
            }
        })
    },
    async create(data){
        const { u_cpf,u_name,u_email,u_password,u_supervisor } = data;
        try{
            return await prisma.pessoaList.create({
                data:{
                    cpf:u_cpf,
                    name:u_name,
                    email:u_email,
                    password:md5(u_password),
                    supervisor:u_supervisor,
                }
            });
        }catch(error){
            console.log(error);
        }
    },
    async update(data){
        const { u_cpf,u_name,u_supervisor,u_office_fk } = data;
        return await prisma.pessoaList.update({
            where: { cpf: u_cpf },
            data:{
                u_name,
                u_supervisor,
                u_office_fk
            }
        });
    },
    async userDelete(u_cpf){
        const user = await prisma.pessoaList.findUnique({ where: { cpf: u_cpf },});
        if(!user) return false;
        return await prisma.pessoaList.delete({
            where: { cpf: u_cpf },
            select:{
                name:true,
                cpf:true,
                email:true,
                supervisor:true
            }
        });
    }
}