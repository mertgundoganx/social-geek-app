'use strict';
const { Router } = require('express');
const indexController = require('../controllers/indexController');
const {requireAuth} = require('../middleware/authMiddleware');

const router = Router();

router.get('/', indexController.indexGet);

module.exports = router;