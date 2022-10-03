const { status } = require("@helper/Status");
const { getAuth } = require('@model/user');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

function authorization(params = {}) {
    return jwt.sign(params, JSON.stringify(process.env.SECRET), { expiresIn: 86400 });
}

module.exports = {
    async authetication(req, res) {
        // console.log(md5('censobr@ufms2022construcaodesoftware'));
        console.log('> [Auth] Starting validation...');
        if (!req.body) return res.status(401).json({ erro: false, message: "Falha na requisição", });
        try {
            const { u_email, u_password } = req.body;
            console.log(u_email, u_password)
            const { id, email, password } = await getAuth({ u_email });
            const { message, reqStatus } = status(res.statusCode);
            if (!email && !password) return res.status(200).json({ message: 'Não encontramos oque procura!', data: null, status: reqStatus });
            console.log(u_password, password);
            if (u_email === email && md5(u_password) === password) {
                return res.status(200).json({
                    email,
                    token: authorization({ email })
                });
            }
            return res.status(reqStatus).json({ message: 'Falha na autenticação!', status: reqStatus });
        } catch (error) {
            console.log('> [Auth] Stopping validation...');
            console.log(error);
            console.log('> [Auth] Stopping done!...');
        } finally {
            console.log('> [Auth] Validation done!...');
        }
    }
}