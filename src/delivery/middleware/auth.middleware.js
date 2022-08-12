const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const AuthMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader){
            return res.status(401).json({
                "message" : "Unauthorized"
            })
        }
        
        const token = authHeader.replace('Bearer ', '');
        if(!token){
            return res.status(401).json({
                "message" : "Token Incorrect!"
            })
        }
        jwt.verify(token, process.env.TOKEN_SECRET, '', null)
        next()
    } catch (error) {
        return res.status(401).json({
            "message" : error.message
        })
    }
}

module.exports = AuthMiddleware;