const todoRoutes = require("express").Router();

const responseHandler = require("../middleware/response-handler");
const todoCtrl = require("../controllers/todo.controller");

todoRoutes.get("/", async function(req, res){
    const todos = await todoCtrl.getTodos(req.userId);
    return responseHandler(res, 200, {
        data: todos,
        message: "todos data",
        status: "success",
        error: []
    });
});

todoRoutes.post("/", async function(req, res){
    const todo = await todoCtrl.saveTodo(req.body, req.userId);
    return responseHandler(res, 200, {
        data: todo,
        message: "todo created",
        status: "success",
        error: []
    });
});

todoRoutes.put("/", async function(req, res){
    const todo = await todoCtrl.editTodo(req.body, req.userId);
    return responseHandler(res, 200, {
        data: todo,
        message: "todo edited",
        status: "success",
        error: []
    });
});

todoRoutes.patch("/:id", async function(req, res){
    const todo = await todoCtrl.completeTodo(req.params.id, req.userId);
    return responseHandler(res, 200, {
        data: todo,
        message: "todo edited",
        status: "success",
        error: []
    });
});

todoRoutes.delete("/:id", async function(req, res){
    const todo = await todoCtrl.deleteTodo(req.params.id, req.userId);
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