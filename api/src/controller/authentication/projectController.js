const { status } = require("@helper/Status");
const jwt  = require('jsonwebtoken');

module.exports = {
    async authenticate(req,res){
        const [,token] = req.headers.authorization.split(' ');
        jwt.verify(token,JSON.stringify(process.env.SECRET),(err,decoded)=>{
            if(err) return res.status(401).json({message:'Token invalid!'});
            req.idusuario = decoded.idusuario;
            req.email = decoded.email;
            req.papel = decoded.papel;
            return res.status(200).json({message:"Usuário altenticado!",status:status(200).reqStatus});
        });
        // const {message, reqStatus} = status(res.statusCode);
        // if(!req.email) return res.status(400).json({message:'Autenticação não foi valida!',status:reqStatus,data:false});
        // return res.status(200).json({message,status:reqStatus,data:true});
    }
}