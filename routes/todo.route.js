const todoRoutes = require("express").Router();

const responseHandler = require("../middleware/response-handler");
const todoCtrl = require("../controllers/todo.controller");
const { decodeToken } = require("../library/jwt");

todoRoutes.get("/", async function(req, res){

    //pagination
    //user_id
    const user = decodeToken(req.headers.authorization.split(' ')[1]);
    const todos = await todoCtrl.getTodos(user.userId);
    return responseHandler(res, 200, {
                data: todos,
                message: "todos data",
                status: "success",
                error: []
            });
});

todoRoutes.post("/", async function(req, res){

    const todo = await todoCtrl.saveTodo(req.body);
    return responseHandler(res, 200, {
                data: todo,
                message: "todo created",
                status: "success",
                error: []
            });
});

todoRoutes.put("/", async function(req, res){

    const todo = await todoCtrl.editTodo(req.body);
    return responseHandler(res, 200, {
                data: todo,
                message: "todo edited",
                status: "success",
                error: []
            });
});

todoRoutes.patch("/:id", async function(req, res){

    const todo = await todoCtrl.completeTodo(req.params.id);
    return responseHandler(res, 200, {
                data: todo,
                message: "todo edited",
                status: "success",
                error: []
            });
});

todoRoutes.delete("/:id", async function(req, res){
    //authorization
    const todo = await todoCtrl.deleteTodo(req.params.id);
    return responseHandler(res, 200, {
                data: todo,
                message: "todo deleted",
                status: "success",
                error: []
            });
});

module.exports = {
    todoRoutes
}