const {create} = require("@model/user/user");

const User = {
    async createUser(req,res){
        const createUser = await create(req.body);
        res.json({result: createUser});
    }
}

module.exports = User;
