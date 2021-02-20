const responseHandler = function(res, code, payload) {
    res.status(code).json({
        data: payload.data,
        message: payload.message,
        error: payload.error,
        status: payload.status
    });
}

module.exports = responseHandler;