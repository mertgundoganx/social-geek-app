'use strict';
const { Router } = require('express');
const registerController = require('../controllers/registerController');

const router = Router();

router.get('/register', registerController.registerGet);
router.post('/register', registerController.registerPost);

module.exports = router;