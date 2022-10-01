const jwt  = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(400).json({message:'No token provided!'});

    const parts = authHeader.split(' ');

    if(!parts.length === 2) return res.status(401).json({message:'Token error!'});
    
    const [scheme,token] = parts;

    if(!/^Bearer$/i.test(scheme)) return res.status(401).json({message:'Token malformatted!'});

    jwt.verify(token,JSON.stringify(process.env.SECRET),(err,decoded)=>{
        if(err) return res.status(401).json({message:'Token invalid!'});
        req.userEmail = decoded.email;
        return next();
    });
}