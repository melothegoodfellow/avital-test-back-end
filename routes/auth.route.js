const authRoutes = require("express").Router();
const multer = require("multer");

const { storage, fileFilter } = require("../library/file-upload");
const responseHandler = require("../middleware/response-handler");
const userCtrl = require("../controllers/user.controller");
const { maxFileSize } = require("../constants/server");

authRoutes.post("/signup", async function(req, res){
    const upload = multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: maxFileSize
        }
    })
    .single("photo");
    upload(req, res, async (error) => {
        if(error){
            if(error.code === "LIMIT_FILE_SIZE"){
                return responseHandler(res, 413, {
                    data: [],
                    message: "Image upload should be below 1 MB",
                    status: "User not created",
                    error: []
                });
            }
            console.log("error", error);
        }
        const data = await userCtrl.signup({
            username: req.body.username,
            password: req.body.password,
            photo: req.file.filename,
        });
        if(data.error){
            return responseHandler(res, data.code , {
                data: [],
                message: data.message,
                status: "",
                error: []
            });
        }
        responseHandler(res, 200, {
            data: data,
            message: "",
            status: "",
            error: []
        });
    });
    
});

authRoutes.post("/login", async function(req, res){
    const data = await userCtrl.login(req.body.username, req.body.password);
    if(data.error){
        return responseHandler(res, data.code, {
            data: [],
            message: data.message,
            status: "success",
            error: []
        });
    }
    return responseHandler(res, 200, {
        data: data,
        message: "user logged in",
        status: "success",
        error: []
    });
});

module.exports = {
    authRoutes
}