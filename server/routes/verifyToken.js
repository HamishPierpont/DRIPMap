const jwt = require('jsonwebtoken');
const config = require('../config/config');

//Middleware function to check validity of json web token
module.exports = function(req, res, next) {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Aceess Denied');
    }

    try {
        const verified = jwt.verify(token, config.token_secret);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send('Invalid Token');
    }
}