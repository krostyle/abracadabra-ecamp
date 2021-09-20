const { validationResult } = require('express-validator');
const fs = require('fs');
const usuario = require('../db/db.json');


const validateUser = (req, res, next) => {
    const { usuario } = req.params;
    const { usuarios } = JSON.parse(fs.readFileSync('./db/db.json'));
    const users = usuarios.map(user => user.toLowerCase());
    const user = users.find(user => user === usuario.toLowerCase());
    if (!user) {
        return res.status(404).json({
            message: 'Usuario no encontrado'
        });
    }
    next();
}



const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
    } else {
        return res.status(422).json({ errors: errors.array() });
    }
};



module.exports = {
    validate,
    validateUser
};