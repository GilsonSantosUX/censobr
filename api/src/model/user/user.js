const prisma = require('@db');

const User = {
    async getAll(){
        return prisma.table_user.findMany({
            include: {
                table_office: true,
            }
        }); 
    },
    async getUnique(data){
        if(data!=undefined){
            const {u_cpf} = data;
            return prisma.table_user.findUnique({
                where: { cpf: u_cpf },
                // include:{
                //     table_office:true,
                //     select:{
                //         office:true,
                //     }
                // },
                select:{
                    cpf:true,
                    nome:true,
                }
            })
        }return;
    },
    async create(data){
        const { u_cpf,u_name,u_supervisor,u_office_fk } = data;
        return prisma.table_user.create({
            data:{
                cpf:u_cpf,
                nome:u_name,
                supervisor:u_supervisor,
                office_fk:u_office_fk
            }
        });
    },
    async update(data){
        const { u_cpf,u_name,u_supervisor,u_office_fk } = data;
        return prisma.table_user.update({
            where: { cpf: u_cpf },
            data:{
                u_name,
                u_supervisor,
                u_office_fk
            }
        });
    },
    async userDelete(u_cpf){
        return prisma.table_user.delete({
            where: { cpf: u_cpf }
        });
    }
}

module.exports = User;