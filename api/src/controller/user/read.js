const { getAll } = require("@model/user/user");

const User = {
    async getAll(req,res){
        const getUsers = await getAll();
        res.json({result:getUsers});
    }
}

module.exports = User;