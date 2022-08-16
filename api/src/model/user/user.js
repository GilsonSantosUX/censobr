const prisma = require('@db');

const User = {
    async getAll(){
        return prisma.table_user.findMany({
            include: {
                table_office: true,
            },
        }); 
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