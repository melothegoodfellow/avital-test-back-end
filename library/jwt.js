var jwt = require('jsonwebtoken');
const { appSecret } = require('../constants/password');

function getToken(userId){
    return jwt.sign({ userId: userId }, appSecret);
}

function verifyToken(token){
    return jwt.verify(token, appSecret);
}

function decodeToken(token){
    return jwt.decode(token);
}

module.exports = {
    getToken,
    verifyToken,
    decodeToken
}