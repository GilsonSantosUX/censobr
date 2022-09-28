const {status} = require('@helper/Status');
const { userDelete } = require("@model/user");

const User = {
    async deleteUser(req,res){
        const statusCode = await status(res.statusCode);
        if(!req.body){
            const {u_cpf} = req.body;
            const deleteUser = await userDelete(u_cpf);
            res.json({result:deleteUser});
        }
        res.json({statusCode});
    }
}

module.exports = User;