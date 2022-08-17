const {status} = require("@helper/Status");
const {create} = require("@model/user/user");

const User = {
    async createUser(req,res){
        const statusCode = await status(res.statusCode);
        if(!req.body){
            const createUser = await create(req.body);
            res.json({result: createUser});
        }
        res.json({statusCode});
        
    }
}

module.exports = User;
