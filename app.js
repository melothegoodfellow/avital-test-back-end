require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//custom
const serverConstants = require("./constants/server.js");
const sequelize = require("./database/connection");
const { authRoutes } = require("./routes/auth.route");
const { todoRoutes } = require("./routes/todo.route");
const verifyToken = require("./middleware/verify-token");

const app = express();
const port = serverConstants.port;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use(express.static("uploads"));
app.use(verifyToken);
app.use("/todo", todoRoutes);

app.listen(port, async function(req, res){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log("Server started");
})