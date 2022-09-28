const { update } = require("@model/user");

const User = {
    async updateUser(req,res){
        const data = req.body;
        const updateUser = await update(data);
        res.json({result:updateUser});
    }
}

module.exports = User;