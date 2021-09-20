const { Router } = require('express');
const { page404 } = require('../controllers/404.controllers');

const router = Router();

router.get('*', page404)




module.exports = router;