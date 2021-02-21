const { Sequelize } = require('sequelize');

//custom
const sequelize = require("../database/connection");
const Todo = require('../database/models/todo')(sequelize, Sequelize.DataTypes);

async function getTodos(userId){
    try {
        return await Todo.findAll({
            where: {
                user_id: userId
            }
        });
    }
    catch(error){
        console.log("todos failed "+error);
    }
}

async function saveTodo(data, userId){
    try {
        return await Todo.create({
            description: data.description,
            user_id: userId
        });
    }
    catch(error){
        console.log("todos failed "+error);
    }
}

async function editTodo(data, userId){
    try {
        return await Todo.update({
            description: data.description
        }, {
            where: {
                id: data.id,
                user_id: userId
            }
        });
    }
    catch(error){
        console.log("todos failed "+error);
    }
}

async function deleteTodo(todoId, userId){
    try {
        return await Todo.destroy({
            where: {
                id: todoId,
                user_id: userId
            }
        });
    }
    catch(error){
        console.log("todos failed "+error);
    }
}

async function completeTodo(todoId, userId){
    try {
        return await Todo.update({
            is_complete: true
        }, {
            where: {
                id: todoId,
                user_id: userId
            }
        });
    }
    catch(error){
        console.log("todos failed "+error);
    }
}

module.exports = {
    getTodos,
    saveTodo,
    editTodo,
    deleteTodo,
    completeTodo
}