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
            console.log("error", error);
            if(error.includes("File too large")){
                return responseHandler(res, 200, {
                    data: [],
                    message: "File too large",
                    status: "User not created",
                    error: []
                });
            }
            console.log("error", error);
        }
        const user = await userCtrl.signup({
            username: req.body.username,
            password: req.body.password,
            photo: req.file.filename,
        });
        responseHandler(res, 200, {
            data: user,
            message: "",
            status: "",
            error: []
        });
    });
    
});

authRoutes.post("/login", async function(req, res){
    const user = await userCtrl.login(req.body.username, req.body.password);
    return responseHandler(res, 200, {
                data: user,
                message: "user logged in",
                status: "success",
                error: []
            });
});

module.exports = {
    authRoutes
}