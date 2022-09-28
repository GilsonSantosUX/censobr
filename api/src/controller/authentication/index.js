const md5 = require('md5');
const { getAuth } = require('@model/user');

module.exports = {
    async login(req,res){
        console.log('> [Auth] Starting validation...');
        try{
            const {u_email,u_password} = req.body;
            const {email,password} = await getAuth({ u_email:"gilsonjosert@gmail.com" });
            console.log(email,password);
            if("gilsonjosert@gmail.com"===email || '123*'===password){ // Em implementação
                return res.status(200).send({mesage:'Sucesso!'});
            }
            return res.status(401).send({mesage:'Falha na autenticação!'});;
        }catch(error){
            console.log('> [Auth] Stopping validation...');
            console.log(error);
            console.log('> [Auth] Stopping done!...');
        }finally{
            console.log('> [Auth] Validation done!...');
        }
    }
}