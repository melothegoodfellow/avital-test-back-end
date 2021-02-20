const path = require("path");

module.exports = {
    port: process.env.SERVER_PORT,
    rootPath: path.dirname(__dirname),
    maxFileSize: 1000000
}