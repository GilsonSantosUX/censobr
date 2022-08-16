const { getAll, getUnique } = require("@model/user/user");

const User = {
    async getAll(req,res){
        const getUsers = await getAll();
        res.json({result:getUsers});
    },
    async getUnique(req,res){
        const getUser = await getUnique(req.body);
        res.json({result:getUser});
    }
}

module.exports = User;