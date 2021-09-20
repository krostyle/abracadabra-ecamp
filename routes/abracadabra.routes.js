const { Router } = require('express');
const { getUsuarios, getUser, getImage } = require('../controllers/usuarios.controllers');
const { validate, validateUser } = require('../middlewares/validation');

const router = Router();

router.get('/usuarios', getUsuarios);
router.get('/juego/:usuario', [validateUser,
    validate
], getUser);
router.get('/conejo/:n', getImage);


module.exports = router;