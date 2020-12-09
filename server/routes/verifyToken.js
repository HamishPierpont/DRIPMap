const jwt = require('jsonwebtoken');
const config = require('../config/config');

//Middleware function to check validity of json web token
module.exports = function(req, res, next) {
    console.log("All request", req);
    console.log("HERE HEADER", req.header);
    console.log(req.header('auth-token'));
    const token = req.header('auth-token');
    console.log("token", token);


    if (!token) {
        return res.status(401).send('Access Denied');
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