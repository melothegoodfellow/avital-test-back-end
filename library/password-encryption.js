const bcrypt = require('bcrypt');
const { saltRounds } = require('../constants/password');

function passwordHash(passwordText) {
    try{
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(passwordText, salt);
    }
    catch(error){
        console.log("password hash failed "+error);
    }
}

function passwordCompare(passwordText, hash) {
    try{
        return bcrypt.compareSync(passwordText, hash);
    }
    catch(error){
        console.log("password compare failed "+error);
    }
}

module.exports = {
    passwordHash,
    passwordCompare
}