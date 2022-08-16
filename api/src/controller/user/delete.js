const { userDelete } = require("@model/user/user");

const User = {
    async deleteUser(req,res){
        const {u_cpf} = req.body;
        const deleteUser = await userDelete(u_cpf);
        res.json({result:deleteUser});
    }
}

module.exports = User;