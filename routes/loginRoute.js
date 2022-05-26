'use strict';
const { Router } = require('express');
const loginController = require('../controllers/loginController');

const router = Router();

router.get('/login', loginController.loginGet);
router.post('/login', loginController.loginPost);

module.exports = router;