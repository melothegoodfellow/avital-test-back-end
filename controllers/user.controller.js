const { Sequelize } = require('sequelize');

//custom
const sequelize = require("../database/connection");
const User = require('../database/models/user')(sequelize, Sequelize.DataTypes);
const { passwordCompare, passwordHash } = require("../library/password-encryption");
const { getToken } = require("../library/jwt");

async function login(username, password){
    try {
        const userData = await User.findOne({ where: { username: username } });
        if(!passwordCompare(password, userData.password))
            return {
                error: true,
                code: 401,
                message: "wrong password"
            };
        const token = getToken(userData.id);
        return {
            username: userData.username,
            photo: userData.photo,
            token: token
        };
    }
    catch(error){
        console.log("user check "+error);
    }
}

async function signup(data){
    try {
        const [ userData, created ] = await User.findOrCreate({
            where: {
                username: data.username
            },
            defaults: {
                password: passwordHash(data.password),
                photo: data.photo
            }
        });
        if(!created){
            return {
                error: true,
                code: 409,
                message: "username already exist"
            };
        }
        const token = getToken(userData.id);
        return {
            id: userData.id,
            username: userData.username,
            photo: userData.photo,
            token: token
        };
    }
    catch(error){
        console.log("user check "+error);
    }
}

module.exports = {
    login,
    signup
}