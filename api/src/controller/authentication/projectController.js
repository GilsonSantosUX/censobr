const { status } = require("@helper/Status");
const jwt  = require('jsonwebtoken');

module.exports = {
    async authenticate(req,res){
        console.log(req.userEmail);
        const {message, reqStatus} = status(res.statusCode);
        if(!req.userEmail) return res.status(400).json({message:'Autenticação não foi valida!',status:reqStatus,data:false});
        return res.status(200).json({message,status:reqStatus,data:true});
    }
}