const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const token = req.body.token;
    if(token){
        try {
            const decoded = jwt.verify(token,"MinhaChaveSecreta");
            req.body = decoded
            next();
        } catch (error) {
            res.json({success:false,erro:error.message})
        }
    }else{
        res.json({success:false,message:"Token invalido"})
    }
}