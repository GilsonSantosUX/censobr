const { status } = require("@helper/Status");
const { update } = require("@model/user");

module.exports = {
    async updateUser(req,res){
        if(!req.body) return res.status(401).json({erro:false,message:"Falha na requisição",});

        const updateUser = await update(req.body);
        const { message, reqStatus} = status(res.statusCode);
        
        if(!updateUser) return res.status(200).json({message:'Não foi possível atualizar essa informação!',data:null,status:reqStatus});
        return res.status(reqStatus).json({message,data:updateUser,status:reqStatus});
    }
}