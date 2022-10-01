const {status} = require("@helper/Status");
const { userDelete, getUnique } = require("@model/user");

module.exports = {
    async deleteUser(req,res){
        if(!req.body) return res.status(401).json({erro:false,message:"Falha na requisição",});

        const {u_cpf} = req.body;
        const { message, reqStatus} = status(res.statusCode);
        const deleteUser = await userDelete(u_cpf);
        if(!deleteUser) return res.status(400).json({message:'Não encontramos o registro que busca!',data:null,status:reqStatus});
        return res.status(200).json({message,data:deleteUser,status:reqStatus});
        
    }
}