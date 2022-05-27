'use strict';
const { Router } = require('express');
const randomGeekController = require('../controllers/randomGeekController');

const router = Router();

router.get('/random', randomGeekController.randomGet);

module.exports = router;