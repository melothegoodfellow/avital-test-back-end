const responseHandler = require("./response-handler");

module.exports = function(req, res, next){
    // console.log(req.headers.authorization);
    if(!req.headers.authorization)
        return responseHandler(res, 401, {
            data: [],
            message: "unautorized",
            status: "failed",
            error: []
        });
    else
        next();
}