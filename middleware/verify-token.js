const responseHandler = require("./response-handler");
const { decodeToken } = require("../library/jwt");

module.exports = function(req, res, next){
    if(!req.headers.authorization) {
        return responseHandler(res, 401, {
            data: [],
            message: "unautorized",
            status: "failed",
            error: []
        });
    }
    else{
        const tokenData = decodeToken(req.headers.authorization.split(' ')[1]);
        req.userId = tokenData.userId;
        next();
    }
}