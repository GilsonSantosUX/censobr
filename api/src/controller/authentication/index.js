const { status } = require("@helper/Status");
const { getUsuarioAuth } = require('@model/usuario');
const jwt = require('jsonwebtoken');

function token(params = {}) {
    return jwt.sign(params, JSON.stringify(process.env.SECRET), { expiresIn: 86400 });
}

function authorization(data){
    try{
        return jwt.verify(
            token,
            JSON.stringify(process.env.SECRET),
            (err,decoded)=>{
                if(err) return res.status(401).json({message:'Token invalid!'});
                req.idusuario = decoded.idusuario;
                req.email = decoded.email;
                req.papel = decoded.papel;
                return next();
        });
    }catch(error){
        throw new console.log({
            name: 'Authorization error',
            message: "Erro de autenticação",
            error: error,
            stack: 'authorization(data)'
        })
    }
    
}

module.exports = {
    async authetication(req, res) {
        // console.log(md5('censobr@ufms2022construcaodesoftware'));
        if (!req.body) return res.status(status(401).reqStatus).json({ erro: false, message:status(401).message,status:status(401).reqStatus});
        try {
            const data = req.body;
            const usuario = await getUsuarioAuth(data);
            if (!usuario) return res.status(status(400).reqStatus).json({message:status(400).message,data,status:status(400).reqStatus});
            const {idusuario,email,senha,Papel} = usuario;
           
            if (data.email.trim() === email.trim() && data.senha.trim() === senha.trim()){
                return res.status(status(200).reqStatus).json({
                    idusuario,
                    email:email.trim(),
                    papel:Papel.sigla,
                    token: token({ idusuario,email:email.trim(),papel:Papel.sigla})
                });
            }else{
                return res.status(status(400).reqStatus).json({message:"Credencial inválida!",data:data.email,status:status(400).reqStatus});
            }
        } catch (error) {
            res.status(status(500).reqStatus).json({message:status(500).message,status:status(500).reqStatus});
        }
    }
}