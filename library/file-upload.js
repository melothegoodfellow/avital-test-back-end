const multer = require("multer");
const path = require("path");
const serverConstants = require("../constants/server");

const storage = multer.diskStorage({
        destination: function(req, file, callback){
            callback(null, serverConstants.rootPath+"/uploads/photos");
        },
        filename: function(req, file, callback){
            const filename = "photo"+Date.now()+path.extname(file.originalname);
            callback(null, filename);
        }
    });

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

module.exports = {
    storage,
    fileFilter
};